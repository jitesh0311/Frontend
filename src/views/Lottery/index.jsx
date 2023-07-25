import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { ref, push, onValue } from "firebase/database";
import { db } from "../../utils/firebase";

const Lottery = () => {
  const [showImage, setShowImage] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);
  const [randomNumber1, setRandomNumber1] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);
  const [randNumber1, setRandNumber1] = useState(null);
  const [randNumber2, setRandNumber2] = useState(null);

  const imageDisplayTimerRef = useRef(null);
  const lotteryIntervalRef = useRef(null);

  // Wrap the function with useCallback to memoize it
  const generateNewRandomNumbersAndDisplayImages = useCallback(() => {
    const newRandomNumber1 = Math.floor(Math.random() * 10);
    const newRandomNumber2 = Math.floor(Math.random() * 10);
    setRandomNumber1(newRandomNumber1);
    setRandomNumber2(newRandomNumber2);

    clearTimeout(imageDisplayTimerRef.current);
    setShowImage(true);
    setDisplayImage(false);
    showImageAfterDelay();
    push(ref(db, "numbers"), {
      number1: newRandomNumber1,
      number2: newRandomNumber2,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showImageAfterDelay = () => {
    imageDisplayTimerRef.current = setTimeout(() => {
      setDisplayImage(true);
      setShowImage(false);
    }, 2000);
  };

  useEffect(() => {
    generateNewRandomNumbersAndDisplayImages();

    lotteryIntervalRef.current = setInterval(() => {
      generateNewRandomNumbersAndDisplayImages();
    }, 30000);

    return () => {
      clearInterval(lotteryIntervalRef.current);
      clearTimeout(imageDisplayTimerRef.current);
    };
  }, [generateNewRandomNumbersAndDisplayImages]);

  const fetchLatestData = useCallback(() => {
    const numbersRef = ref(db, "numbers");

    onValue(numbersRef, (snapshot) => {
      const data = snapshot.val();
      const entries = Object.entries(data);
      const lastEntry = entries[entries.length - 1];
      const lastValue = lastEntry[1];
      const randNumber1 = lastValue.number1;
      const randNumber2 = lastValue.number2;

       setRandNumber1(randNumber1);
      setRandNumber2(randNumber2);
    });
  }, []);

  useEffect(() => {
    fetchLatestData();
  }, [fetchLatestData]);

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
              <RandomImg
                src={require(`../../assets/${randNumber1}.png`)}
              />
              <RandomImg
                src={require(`../../assets/${randNumber2}.png`)}
              />
            </RandomImgWrapper>
          )}
        </FrameWrapper>
      </LotteryWrapper>
    </LotterySect>
  );
};

export default Lottery;
