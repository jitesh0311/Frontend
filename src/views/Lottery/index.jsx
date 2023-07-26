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
  RollDown,
  RollUp,
  RollWrapper,
} from "../../styles/Lottery";
import ResultFrame from "../../assets/frame.jpg";
import RollUpImg from "../../assets/rollup (1).gif";
import RollDownImg from "../../assets/rolldown.gif";

const Lottery = () => {
  const [showImage, setShowImage] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);
  const [randomNumber1, setRandomNumber1] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);
  const [combinedNumber, setCombinedNumber] = useState(null);
  const [lastGeneratedTime, setLastGeneratedTime] = useState(0);

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

  // Function to update the combined number in the Firebase database
  const updateCombinedNumberToDB = (number) => {
    try {
      set(ref(db, "combinedNumber"), number);
    } catch (error) {
      console.error("Error updating combined number to the database:", error);
    }
  };

  // Function to push the new combined number to the Firebase database
  const pushCombinedNumberToDB = (number) => {
    try {
      push(ref(db, "allRandomNumbers"), number);
    } catch (error) {
      console.error("Error pushing combined number to the database:", error);
    }
  };

  // Function to fetch the last generated number from the Firebase database
  const fetchLastGeneratedNumberFromDB = async () => {
    try {
      const snapshot = await get(ref(db, "combinedNumber"));
      if (snapshot.exists()) {
        const combinedNumberFromDB = snapshot.val();
        setCombinedNumber(combinedNumberFromDB);
        const { digit1, digit2 } = splitCombinedNumber(combinedNumberFromDB);
        setRandomNumber1(digit1);
        setRandomNumber2(digit2);
      }
    } catch (error) {
      console.error("Error fetching combined number from the database:", error);
    }
  };

  // Function to generate new numbers and combine them
  const generateNewNumbers = () => {
    const newRandomNumber1 = generateRandomNumber();
    const newRandomNumber2 = generateRandomNumber();
    setRandomNumber1(newRandomNumber1);
    setRandomNumber2(newRandomNumber2);
    const newCombinedNumber = combineNumbers(
      newRandomNumber1,
      newRandomNumber2
    );

    // Update the combined number to the database
    updateCombinedNumberToDB(newCombinedNumber);

    // Push the new combined number to the array of all random numbers in the database
    pushCombinedNumberToDB(newCombinedNumber);

    // Save the current time as the last generated time
    setLastGeneratedTime(new Date().getTime());
  };

  useEffect(() => {
    // Fetch the last generated number from the database
    fetchLastGeneratedNumberFromDB();

    // Set up the interval to generate new numbers every 10 seconds
    const interval = setInterval(() => {
      // Check if 10 seconds have passed since the last generated number
      const currentTime = new Date().getTime();
      if (currentTime - lastGeneratedTime >= 10000) {
        generateNewNumbers();
      }
    }, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [lastGeneratedTime]);

  useEffect(() => {
    // This effect will run once when the component mounts
    // Set a timer to hide the image after 3-4 seconds
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000); // Change this value to 4000 for 4 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const showImageAfterDelay = () => {
    setTimeout(() => {
      setDisplayImage(true); // Show the random number images
      setShowImage(false); // Hide the RollUp and RollDown images
    }, 2000); // Change this value to adjust the delay (in milliseconds)
  };

  // Call the function to start the timer when the component mounts
  useEffect(() => {
    showImageAfterDelay();
  }, []);

  return (
    <LotterySect>
      <LotteryWrapper>
        <FrameWrapper>
          <Frame src={ResultFrame} />
          {showImage && (
            <RollWrapper>
              <RollUp src={RollUpImg} />
              <RollDown src={RollDownImg} />
            </RollWrapper>
          )}

          {displayImage && (
            <RandomImgWrapper>
              {/* Display the first digit of the combined number as an image */}
              {randomNumber1 !== null &&
              randomNumber1 >= 0 &&
              randomNumber1 <= 9 ? (
                <RandomImg
                  src={require(`../../assets/${randomNumber1}.png`)}
                  alt={`Random Number ${randomNumber1}`}
                />
              ) : (
                <p>Image not found</p>
              )}

              {/* Display the second digit of the combined number as an image */}
              {randomNumber2 !== null &&
              randomNumber2 >= 0 &&
              randomNumber2 <= 9 ? (
                <RandomImg
                  src={require(`../../assets/${randomNumber2}.png`)}
                  alt={`Random Number ${randomNumber2}`}
                />
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
