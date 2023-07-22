import React, { useState, useEffect } from 'react'
import { Frame, FrameWrapper, LotterySect, LotteryWrapper, RandomImg, RandomImgWrapper, RollDown, RollUp, RollWrapper } from '../../styles/Lottery'
import ResultFrame from "../../assets/frame.jpg"
import RollUpImg from "../../assets/rollup (1).gif"
import RollDownImg from "../../assets/rolldown.gif"



const Lottery = () => {

    const [showImage, setShowImage] = useState(true);
    const [displayImage, setDisplayImage] = useState(false)
    const [randomNumber1, setRandomNumber1] = useState(null);
    const [randomNumber2, setRandomNumber2] = useState(null);

    useEffect(() => {
      // This effect will run once when the component mounts
      // Set a timer to hide the image after 3-4 seconds
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 3000); // Change this value to 4000 for 4 seconds
  
      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

    const showImageAfterDelay = () => {
        setTimeout(() => {
          setDisplayImage(true);
        }, 3000); // Change this value to adjust the delay (in milliseconds)
      };

        const newRandomNumber1 = Math.floor(Math.random() * 10); // Generates a random number between 1 and 100
        const newRandomNumber2 = Math.floor(Math.random() * 10);
    
      // Call the function to start the timer when the component mounts
      // You can also call this function based on some user interaction (e.g., button click)
      // For simplicity, we'll call it on component mount in this example
      React.useEffect(() => {
        showImageAfterDelay();
      }, []);



  return (
    <LotterySect>
        <LotteryWrapper>
            <FrameWrapper>
                <Frame src = {ResultFrame} />
                {showImage && ( <RollWrapper>
                    <RollUp src = {RollUpImg} />
                    <RollDown src = {RollDownImg} />
                </RollWrapper>
                )}

             {displayImage && (<RandomImgWrapper>
                <RandomImg src = {require(`../../assets/${newRandomNumber1}.png`)} />
                <RandomImg src = {require(`../../assets/${newRandomNumber2}.png`)} />
                </RandomImgWrapper>
             )}
            </FrameWrapper>
        </LotteryWrapper>
    </LotterySect>
  )
}

export default Lottery