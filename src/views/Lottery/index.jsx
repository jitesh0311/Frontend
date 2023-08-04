import React, { useState, useEffect } from "react";
import { ref, onValue, push, get } from "firebase/database";
import { db } from "../../utils/firebase";
import {
  DateTimeWrapper,
  DateWrapper,
  Frame,
  FrameWrapper,
  LotterySect,
  LotteryWrapper,
  RandomImg,
  RandomImgWrapper,
  RollDown,
  RollUp,
  RollWrapper,
  DateHeading,
  FrameSect,
} from "../../styles/Lottery";
import ResultFrame from "../../assets/frame.png";
import RollUpImg from "../../assets/rollup.gif";
import RollDownImg from "../../assets/rolldown.gif";
import Table from "../Table";

const Lottery = () => {
  const [showImage, setShowImage] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);

  // Existing state variables for random numbers and combined numbers
  const [randomNumber1, setRandomNumber1] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);
  const [randomNumber3, setRandomNumber3] = useState(null);
  const [randomNumber4, setRandomNumber4] = useState(null);
  const [combinedNumber1, setCombinedNumber1] = useState(null);
  const [combinedNumber2, setCombinedNumber2] = useState(null);
  // State to hold fetched data from Firebase
  const [firebaseData, setFirebaseData] = useState({
    allRandomNumbers1: [],
    allRandomNumbers2: [],
    updatedLotteryNumbers: [],
  });

  const isWithinNineToNine = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 9 && currentHour <= 21; // 21 is 9 pm in 24-hour format
  };

  const fetchDataFromFirebase = () => {
    try {
      const unsubscribe1 = onValue(ref(db, "allRandomNumbers1"), (snapshot) => {
        if (snapshot.exists()) {
          const allRandomNumbers1 = Object.values(snapshot.val());
          setFirebaseData((prevData) => ({
            ...prevData,
            allRandomNumbers1,
          }));
        }
      });

      const unsubscribe2 = onValue(ref(db, "allRandomNumbers2"), (snapshot) => {
        if (snapshot.exists()) {
          const allRandomNumbers2 = Object.values(snapshot.val());
          setFirebaseData((prevData) => ({
            ...prevData,
            allRandomNumbers2,
          }));
        }
      });

      const unsubscribe3 = onValue(
        ref(db, "updatedLotteryNumbers"),
        (snapshot) => {
          if (snapshot.exists()) {
            const updatedLotteryNumbers = Object.values(snapshot.val());
            setFirebaseData((prevData) => ({
              ...prevData,
              updatedLotteryNumbers,
            }));
          }
        }
      );

      return () => {
        // Clean up the subscriptions when the component unmounts
        unsubscribe1();
        unsubscribe2();
        unsubscribe3();
      };
    } catch (error) {
      console.error("Error fetching data from the database:", error);
    }
  };

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

  // Function to push the new combined number with timestamp to the Firebase database
  const pushCombinedNumber1ToDB = (number) => {
    try {
      const timestamp = new Date().toISOString();
      const time = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      const date = new Date().toLocaleDateString();
      // Get the current date as a string
      push(ref(db, "allRandomNumbers1"), { number, timestamp, time, date });
    } catch (error) {
      console.error("Error pushing combined number 1 to the database:", error);
    }
  };

  const setLastGeneratedTime = (time) => {
    // Implement the logic to save the time to the database or do other actions if needed.
  };

  // Function to push the new combined number with timestamp to the Firebase database
  const pushCombinedNumber2ToDB = (number) => {
    try {
      const timestamp = new Date().toISOString();
      const time = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      const date = new Date().toLocaleDateString(); // Get the current date as a string
      push(ref(db, "allRandomNumbers2"), { number, timestamp, time, date });
    } catch (error) {
      console.error("Error pushing combined number 2 to the database:", error);
    }
  };

  // Function to fetch the last generated numbers from the Firebase database
  const fetchLastGeneratedNumbersFromDB = async () => {
    try {
      const snapshot1 = await get(ref(db, "allRandomNumbers1"));
      const snapshot2 = await get(ref(db, "allRandomNumbers2"));
      if (snapshot1.exists()) {
        const allRandomNumbers1 = Object.values(snapshot1.val());
        const lastGeneratedNumber1 =
          allRandomNumbers1[allRandomNumbers1.length - 1];
        setCombinedNumber1(lastGeneratedNumber1.number);
        const { digit1, digit2 } = splitCombinedNumber(
          lastGeneratedNumber1.number
        );
        setRandomNumber1(digit1);
        setRandomNumber2(digit2);
      }
      if (snapshot2.exists()) {
        const allRandomNumbers2 = Object.values(snapshot2.val());
        const lastGeneratedNumber2 =
          allRandomNumbers2[allRandomNumbers2.length - 1];
        setCombinedNumber2(lastGeneratedNumber2.number);
        const { digit1, digit2 } = splitCombinedNumber(
          lastGeneratedNumber2.number
        );
        setRandomNumber3(digit1);
        setRandomNumber4(digit2);
      }
    } catch (error) {
      console.error(
        "Error fetching combined numbers from the database:",
        error
      );
    }
  };

  // Function to generate new numbers and combine them

  const generateNewNumbers = () => {
    if (isWithinNineToNine()) {
      const newRandomNumber1 = generateRandomNumber();
      const newRandomNumber2 = generateRandomNumber();
      const newRandomNumber3 = generateRandomNumber();
      const newRandomNumber4 = generateRandomNumber();

      const newCombinedNumber1 = combineNumbers(
        newRandomNumber1,
        newRandomNumber2
      );
      const newCombinedNumber2 = combineNumbers(
        newRandomNumber3,
        newRandomNumber4
      );

      if (newCombinedNumber1 === newCombinedNumber2) {
        // If they are the same, generate new numbers again
        return generateNewNumbers();
      }

      // If they are different, update the state variables with the new numbers
      setRandomNumber1(newRandomNumber1);
      setRandomNumber2(newRandomNumber2);
      setRandomNumber3(newRandomNumber3);
      setRandomNumber4(newRandomNumber4);
      setCombinedNumber1(newCombinedNumber1);
      setCombinedNumber2(newCombinedNumber2);

      // Push the combined numbers to the database
      pushCombinedNumber1ToDB(newCombinedNumber1);
      pushCombinedNumber2ToDB(newCombinedNumber2);

      // Save the current time as the last generated time
      setLastGeneratedTime(new Date().getTime());
    } else {
      // If the current time is not within 9 am to 9 pm, do nothing
      console.log("Numbers can only be generated between 9 am to 9 pm.");
    }
  };

  const updateNumbers = () => {
    generateNewNumbers();
    setInterval(generateNewNumbers, 900000); // 10 seconds (10000 milliseconds)
  };

  useEffect(() => {
    // Fetch the last generated numbers from the database
    fetchLastGeneratedNumbersFromDB();
    fetchDataFromFirebase();

    const date = new Date();
    const minutes = date.getMinutes();
    const remainder = minutes % 15;
    const minutesToAdd = remainder === 0 ? 0 : 15 - remainder;
    date.setMinutes(minutes + minutesToAdd, 0, 0); // Set seconds and milliseconds to 0
    const millisecondsUntilNextQuarterHour =
      date.getTime() - new Date().getTime();

    const initialUpdateTimer = setTimeout(() => {
      console.log("Triggering generateNewNumbers...");
      updateNumbers(); // Generate numbers immediately after the initial delay
    }, millisecondsUntilNextQuarterHour);

    // const interval = setInterval(() => {
    //   console.log("Triggering generateNewNumbers...");
    //   updateNumbers(); // Generate numbers every 10 seconds
    // }, 900000);

    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    // Clear the timers when the component is unmounted
    return () => {
      clearTimeout(initialUpdateTimer);
      // clearInterval(interval);
    };
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

  const currentDate = new Date();

  // Get the individual components of the date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();

  // Format the date as desired (e.g., "YYYY-MM-DD HH:MM:SS")

  const formattedDate = `${year}/${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}`;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the time as HH:MM:SS
  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <LotterySect>
      <LotteryWrapper>
        <DateTimeWrapper>
          <DateWrapper>
            <DateHeading>{formattedDate}</DateHeading>
          </DateWrapper>
          <DateWrapper>
            <DateHeading>{formatTime(currentTime)}</DateHeading>
          </DateWrapper>
        </DateTimeWrapper>
        <FrameSect>
          <FrameWrapper>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Bhutan <span style={{ color: "#FFD700" }}>Gold</span>
            </h1>
            <Frame src={ResultFrame} />

            {showImage && (
              <RollWrapper>
                <RollUp src={RollUpImg} />
                <RollDown src={RollDownImg} />
              </RollWrapper>
            )}

            {displayImage && (
              <RandomImgWrapper>
                <div>
                  {/* Display the first digit of the combined number 1 as an image */}
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

                  {/* Display the second digit of the combined number 1 as an image */}
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
                </div>
              </RandomImgWrapper>
            )}
          </FrameWrapper>
          <FrameWrapper>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Bhutan <span style={{ color: "#D3D3D3" }}>Deluxe</span>
            </h1>
            <Frame src={ResultFrame} />
            {showImage && (
              <RollWrapper>
                <RollUp src={RollUpImg} />
                <RollDown src={RollDownImg} />
              </RollWrapper>
            )}

            {displayImage && (
              <RandomImgWrapper>
                <div>
                  {/* Display the first digit of the combined number 2 as an image */}
                  {randomNumber3 !== null &&
                  randomNumber3 >= 0 &&
                  randomNumber3 <= 9 ? (
                    <RandomImg
                      src={require(`../../assets/${randomNumber3}.png`)}
                      alt={`Random Number ${randomNumber3}`}
                    />
                  ) : (
                    <p>Image not found</p>
                  )}

                  {/* Display the second digit of the combined number 2 as an image */}
                  {randomNumber4 !== null &&
                  randomNumber4 >= 0 &&
                  randomNumber4 <= 9 ? (
                    <RandomImg
                      src={require(`../../assets/${randomNumber4}.png`)}
                      alt={`Random Number ${randomNumber4}`}
                    />
                  ) : (
                    <p>Image not found</p>
                  )}
                </div>
              </RandomImgWrapper>
            )}
          </FrameWrapper>
        </FrameSect>
      </LotteryWrapper>
      <Table tableData={firebaseData} />
      {/* Display the table component */}
    </LotterySect>
  );
};

export default Lottery;
