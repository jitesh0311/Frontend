import React from 'react'
import { CheckResults, CheckResultsWrap, Heading1, Heading2, Heading3, HeadingWrap, HeroLeft, HeroRight, HeroRightImg, HeroSect, HeroWrapper } from '../../styles/Hero'
import RightImg from "../../assets/Slot_Machine_PNG_Picture__Slot_Machine__Gambling_Equipment__Win_Money_PNG_Image_For_Free_Download-removebg-preview.png"
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    const handleCallResultsClick = () => {
      navigate("/Test");
    };
     const handleAdminLogin = () => {
       navigate("/Login");
     };

  return (
    <HeroSect>
      <HeroWrapper>
        <HeroLeft>
          <HeadingWrap>
            <Heading1>
              Welcome To The Gaming{" "}
              <span onClick={handleAdminLogin}>Club</span>
            </Heading1>
            <Heading2>Try Your Luck and Win Exclusive Prizes!</Heading2>
          </HeadingWrap>
          <CheckResultsWrap>
            <CheckResults onClick={handleCallResultsClick}>
              Check Results
            </CheckResults>
          </CheckResultsWrap>
        </HeroLeft>
        <HeroRight>
          <HeroRightImg src={RightImg} />
        </HeroRight>
      </HeroWrapper>
    </HeroSect>
  );
}

export default Hero