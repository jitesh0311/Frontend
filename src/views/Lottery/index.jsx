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
  const [lotteryActive, setLotteryActive] = useState(true);
  const [allRandomNumbers, setAllRandomNumbers] = useState([]);

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

  // Function to update all random numbers to the Firebase database
  const updateAllRandomNumbersToDB = (numbers) => {
    try {
      set(ref(db, "allRandomNumbers"), numbers);
    } catch (error) {
      console.error(
        "Error updating all random numbers to the database:",
        error
      );
    }
  };

  // Function to save the last generated number to local storage
  const saveLastGeneratedNumber = (number) => {
    localStorage.setItem("lastGeneratedNumber", number.toString());
  };

  // Function to check if one minute has passed since the last generated number
  const hasOneMinutePassed = () => {
    const lastGeneratedNumber = localStorage.getItem("lastGeneratedNumber");
    if (!lastGeneratedNumber) return true;

    const currentTime = new Date().getTime();
    const lastGeneratedTime = parseInt(lastGeneratedNumber, 10);
    return currentTime - lastGeneratedTime >= 60000;
  };

  useEffect(() => {
    // Fetch the last generated number from local storage
    const lastGeneratedNumber = localStorage.getItem("lastGeneratedNumber");
    if (lastGeneratedNumber) {
      const lastNumber = parseInt(lastGeneratedNumber, 10);
      setCombinedNumber(lastNumber);
    }
  }, []);

  useEffect(() => {
    // Generate new random numbers and combine them every 1 minute
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

      // Add the new combined number to the array of all random numbers
      setAllRandomNumbers((prevRandomNumbers) => [
        ...prevRandomNumbers,
        newCombinedNumber,
      ]);

      // Save the last generated number to local storage
      saveLastGeneratedNumber(newCombinedNumber);
    };

    // Generate new numbers initially
    generateNewNumbers();

    // Set up the interval to generate new numbers every 1 minute
    const interval = setInterval(() => {
      // Check if one minute has passed since the last generated number
      if (hasOneMinutePassed()) {
        generateNewNumbers();
      }
    }, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

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
  // You can also call this function based on some user interaction (e.g., button click)
  // For simplicity, we'll call it on component mount in this example
  useEffect(() => {
    showImageAfterDelay();
  }, []);

  // Fetch the combined number from Firebase and split it
  useEffect(() => {
    const getCombinedNumberFromDB = async () => {
      try {
        const snapshot = await get(ref(db, "combinedNumber"));
        if (snapshot.exists()) {
          const combinedNumberFromDB = snapshot.val();
          // Split the combined number into two digits
          const { digit1, digit2 } = splitCombinedNumber(combinedNumberFromDB);
          setRandomNumber1(digit1);
          setRandomNumber2(digit2);
        }
      } catch (error) {
        console.error(
          "Error fetching combined number from the database:",
          error
        );
      }
    };

    // Show the rollup and rolldown images before fetching the combined number
    setShowImage(true);
    setDisplayImage(false);

    // Wait for 2 seconds, then fetch the combined number and show the random number images
    const timer = setTimeout(() => {
      getCombinedNumberFromDB();
      setDisplayImage(true);
      setShowImage(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
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

          {displayImage && lotteryActive && (
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
