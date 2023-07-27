import React, { useState, useEffect } from "react";
import { ref, set, get, push } from "firebase/database";
import { db } from "../../utils/firebase";
import {
  Frame,
  FrameWrapper,
  LotterySect,
  LotteryWrapper,
  RandomImg,
  RandomImgWrapper,
} from "../../styles/Lottery";
import ResultFrame from "../../assets/frame.jpg";

const Lottery = () => {
  const [displayImage, setDisplayImage] = useState(false);
  const [combinedNumber1, setCombinedNumber1] = useState(null);
  const [combinedNumber2, setCombinedNumber2] = useState(null);
  const [allRandomNumber1, setAllRandomNumber1] = useState([]);
  const [allRandomNumber2, setAllRandomNumber2] = useState([]);

  // Function to generate a new random number between 0 and 9
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  // Function to combine two numbers into a single number
  const combineNumbers = (num1, num2) => {
    const combinedString = num1.toString() + num2.toString();
    return parseInt(combinedString, 10); // Convert the combined string back to a number
  };

  // Function to split the combined number into two digits
  const splitCombinedNumber = (number) => {
    const digit1 = Math.floor(number / 10);
    const digit2 = number % 10;
    return { digit1, digit2 };
  };

  // Function to push the combined number to the Firebase database
  const pushCombinedNumberToDB = (number, id) => {
    try {
      push(ref(db, `allRandomNumber${id}`), number);
    } catch (error) {
      console.error(
        `Error pushing combined number ${id} to the database:`,
        error
      );
    }
  };

  // Function to fetch the combined numbers from the Firebase database
  const fetchCombinedNumbersFromDB = async () => {
    try {
      const snapshot1 = await get(ref(db, "allRandomNumber1"));
      const snapshot2 = await get(ref(db, "allRandomNumber2"));
      if (snapshot1.exists() && snapshot2.exists()) {
        const allRandomNumber1 = Object.values(snapshot1.val());
        const allRandomNumber2 = Object.values(snapshot2.val());
        setAllRandomNumber1(allRandomNumber1);
        setAllRandomNumber2(allRandomNumber2);
      }
    } catch (error) {
      console.error(
        "Error fetching combined numbers from the database:",
        error
      );
    }
  };

  useEffect(() => {
    // Check if the current time is past 14:30 (2:30 PM)
    const now = new Date();
    if (now.getHours() >= 18 && now.getMinutes() >= 41) {
      return; // Stop generating random numbers if it's past 14:30
    }

    // Generate the random numbers after 1 minute
    const interval = setInterval(() => {
      // Check the current time again to avoid generating numbers after 14:30
      const now = new Date();
      if (now.getHours() >= 14 && now.getMinutes() >= 41) {
        clearInterval(interval); // Stop generating random numbers
        return;
      }

      // Generate four random numbers
      const newRandomNumber1 = generateRandomNumber();
      const newRandomNumber2 = generateRandomNumber();
      const newRandomNumber3 = generateRandomNumber();
      const newRandomNumber4 = generateRandomNumber();

      // Combine the first two numbers and the last two numbers
      const newCombinedNumber1 = combineNumbers(
        newRandomNumber1,
        newRandomNumber2
      );
      const newCombinedNumber2 = combineNumbers(
        newRandomNumber3,
        newRandomNumber4
      );

      // Check if the combined numbers are not already in the database
      if (
        !allRandomNumber1.includes(newCombinedNumber1) &&
        !allRandomNumber2.includes(newCombinedNumber2)
      ) {
        // Push the new combined numbers to the database
        pushCombinedNumberToDB(newCombinedNumber1, 1);
        pushCombinedNumberToDB(newCombinedNumber2, 2);

        // Set the combined numbers in state
        setCombinedNumber1(newCombinedNumber1);
        setCombinedNumber2(newCombinedNumber2);

        // Show the random number images
        setDisplayImage(true);
      }
    }, 10000); // 1 minute

    // Fetch the combined numbers from the database when the component mounts
    fetchCombinedNumbersFromDB();

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [allRandomNumber1, allRandomNumber2]);

  const showImageAfterDelay = () => {
    setTimeout(() => {
      setDisplayImage(false); // Hide the random number images
    }, 2000); // Change this value to adjust the delay (in milliseconds)
  };

  // Call the function to hide the images after 2 seconds when the component mounts
  useEffect(() => {
    showImageAfterDelay();
  }, []);

  return (
    <LotterySect>
      <LotteryWrapper>
        <FrameWrapper>
          <Frame src={ResultFrame} />
          {displayImage && (
            <RandomImgWrapper>
              {/* Display the first digit of the combined number 1 as an image */}
              {combinedNumber1 !== null &&
              combinedNumber1 >= 0 &&
              combinedNumber1 <= 99 ? (
                <>
                  <RandomImg
                    src={require(`../../assets/${
                      splitCombinedNumber(combinedNumber1).digit1
                    }.png`)}
                    alt={`Random Number ${
                      splitCombinedNumber(combinedNumber1).digit1
                    }`}
                  />
                  <RandomImg
                    src={require(`../../assets/${
                      splitCombinedNumber(combinedNumber1).digit2
                    }.png`)}
                    alt={`Random Number ${
                      splitCombinedNumber(combinedNumber1).digit2
                    }`}
                  />
                </>
              ) : (
                <p>Image not found</p>
              )}

              {/* Display the first digit of the combined number 2 as an image */}
              {combinedNumber2 !== null &&
              combinedNumber2 >= 0 &&
              combinedNumber2 <= 99 ? (
                <>
                  <RandomImg
                    src={require(`../../assets/${
                      splitCombinedNumber(combinedNumber2).digit1
                    }.png`)}
                    alt={`Random Number ${
                      splitCombinedNumber(combinedNumber2).digit1
                    }`}
                  />
                  <RandomImg
                    src={require(`../../assets/${
                      splitCombinedNumber(combinedNumber2).digit2
                    }.png`)}
                    alt={`Random Number ${
                      splitCombinedNumber(combinedNumber2).digit2
                    }`}
                  />
                </>
              ) : (
                <p>Image not found</p>
              )}
            </RandomImgWrapper>
          )}
        </FrameWrapper>
      </LotteryWrapper>
    </LotterySect>
  );
};

export default Lottery;
