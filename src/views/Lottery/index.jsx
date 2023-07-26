import React, { useState, useEffect, useRef } from "react";
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
import { ref, push } from "firebase/database";
import { db } from "../../utils/firebase";

const Lottery = () => {
  const [showImage, setShowImage] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);
  const [randomNumber1, setRandomNumber1] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);
  const [lotteryActive, setLotteryActive] = useState(true);

  const imageDisplayTimerRef = useRef(null);
  const lotteryIntervalRef = useRef(null);

  // Function to generate a new random number between 0 and 9
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  // Function to update the database with random numbers from local storage
  const updateDatabaseWithLocalStorageData = () => {
    const lastRandomNumber1 = localStorage.getItem("randomNumber1");
    const lastRandomNumber2 = localStorage.getItem("randomNumber2");
    push(ref(db, "numbers"), {
      number1: parseInt(lastRandomNumber1, 10),
      number2: parseInt(lastRandomNumber2, 10),
    });
  };

  useEffect(() => {
    // Check if the last timestamp is available in localStorage
    const lastTimestamp = localStorage.getItem("lastTimestamp");
    const currentTime = Date.now();

    if (lastTimestamp) {
      // If the last timestamp is available, check if it has been more than 1 minute
      const timeDifference = currentTime - parseInt(lastTimestamp, 10);
      if (timeDifference < 60000) {
        // If less than 1 minute, use the previously generated numbers
        const lastRandomNumber1 = localStorage.getItem("randomNumber1");
        const lastRandomNumber2 = localStorage.getItem("randomNumber2");
        setRandomNumber1(parseInt(lastRandomNumber1, 10));
        setRandomNumber2(parseInt(lastRandomNumber2, 10));

        // Update the database with random numbers from local storage
        updateDatabaseWithLocalStorageData();
      } else {
        // If more than 1 minute, generate new random numbers and update the timestamp in local storage
        const newRandomNumber1 = generateRandomNumber();
        const newRandomNumber2 = generateRandomNumber();
        setRandomNumber1(newRandomNumber1);
        setRandomNumber2(newRandomNumber2);
        localStorage.setItem("randomNumber1", newRandomNumber1.toString());
        localStorage.setItem("randomNumber2", newRandomNumber2.toString());
        localStorage.setItem("lastTimestamp", currentTime.toString());

        // Update the database with the newly generated random numbers
        push(ref(db, "numbers"), {
          number1: newRandomNumber1,
          number2: newRandomNumber2,
        });
      }
    } else {
      // If the last timestamp is not available, generate new random numbers and set the timestamp in local storage
      const newRandomNumber1 = generateRandomNumber();
      const newRandomNumber2 = generateRandomNumber();
      setRandomNumber1(newRandomNumber1);
      setRandomNumber2(newRandomNumber2);
      localStorage.setItem("randomNumber1", newRandomNumber1.toString());
      localStorage.setItem("randomNumber2", newRandomNumber2.toString());
      localStorage.setItem("lastTimestamp", currentTime.toString());

      // Update the database with the newly generated random numbers
      push(ref(db, "numbers"), {
        number1: newRandomNumber1,
        number2: newRandomNumber2,
      });
    }

    // Set up the interval to check for updates every 10 seconds (10 * 1000 milliseconds)
    lotteryIntervalRef.current = setInterval(() => {
      const currentTimestamp = Date.now();
      const lastTimestamp = parseInt(localStorage.getItem("lastTimestamp"), 10);
      const timeDifference = currentTimestamp - lastTimestamp;
      if (timeDifference >= 60000) {
        // If more than 1 minute, generate new random numbers and update the timestamp in local storage
        const newRandomNumber1 = generateRandomNumber();
        const newRandomNumber2 = generateRandomNumber();
        setRandomNumber1(newRandomNumber1);
        setRandomNumber2(newRandomNumber2);
        localStorage.setItem("randomNumber1", newRandomNumber1.toString());
        localStorage.setItem("randomNumber2", newRandomNumber2.toString());
        localStorage.setItem("lastTimestamp", currentTimestamp.toString());

        // Update the database with the newly generated random numbers
        push(ref(db, "numbers"), {
          number1: newRandomNumber1,
          number2: newRandomNumber2,
        });
      }

      // Check if it's past 3:40 PM and stop generating and updating random numbers
      const now = new Date();
      if (now.getHours() === 17 && now.getMinutes() >= 21) {
        clearInterval(lotteryIntervalRef.current);
        setLotteryActive(false);
      }
    }, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(lotteryIntervalRef.current);
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
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(17, 21, 0, 0); // Set the target time to 3:40 PM

    // If the current time is before the target time, display the images after the specified delay
    if (now < targetTime) {
      setTimeout(() => {
        setDisplayImage(true);
        setShowImage(false); // Hide the RollUp and RollDown images
      }, 2000); // Change this value to adjust the delay (in milliseconds)
    } else {
      // If the current time is after the target time, don't display the images
      setDisplayImage(false);
      setShowImage(false);
    }
  };

  // Call the function to start the timer when the component mounts
  // You can also call this function based on some user interaction (e.g., button click)
  // For simplicity, we'll call it on component mount in this example
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

          {displayImage && lotteryActive && (
            <RandomImgWrapper>
              {/* Check if the required images exist, if not, show a placeholder */}
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
