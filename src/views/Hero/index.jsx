import React from 'react'
import { CheckResults, CheckResultsWrap, Heading1, Heading2, Heading3, HeadingWrap, HeroLeft, HeroRight, HeroRightImg, HeroSect, HeroWrapper } from '../../styles/Hero'
import RightImg from "../../assets/RightImg.jpeg"

const Hero = () => {
  return (
    <HeroSect>
        <HeroWrapper>
            <HeroLeft>
                <HeadingWrap>
                <Heading1>Welcome To The Gaming Club</Heading1>
                <Heading2>Try Your Luck and Win Exclusive Prizes!</Heading2>
                </HeadingWrap>
                <CheckResultsWrap>
                    <CheckResults href = "#">Check Results</CheckResults>
                </CheckResultsWrap>
            </HeroLeft>
            <HeroRight>
                <HeroRightImg src = {RightImg}/>
            </HeroRight>
        </HeroWrapper>
    </HeroSect>
  )
}

export default Hero