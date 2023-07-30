import styled from 'styled-components'


export const HeroSect = styled.div`
    width:100%;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 25px;
`

export const HeroWrapper = styled.div`
    width:100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap:20px;

    @media (max-width:768px)
    {
        flex-direction: column-reverse;
        gap:40px;
    }
`

export const HeroLeft = styled.div`
    width:100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap:50px;

    @media (max-width:768px)
    {
        text-align: center;
        gap:40px;
    }
    
`
export const HeadingWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
`
export const Heading1 = styled.h1`
  font-size: 50px;
  line-height: 1;
  color: #fffefee6;

  @media (max-width: 957px) {
    font-size: 45px;
  }

  @media (max-width: 865px) {
    font-size: 40px;
  }

  @media (max-width: 782px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
  @media (max-width: 403px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const Heading2 = styled.p`
  font-size: 22px;
  line-height: 1;
  color: #fffefee6;

  @media (max-width: 957px) {
    font-size: 20px;
  }

  @media (max-width: 865px) {
    font-size: 18px;
  }

  @media (max-width: 782px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 403px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
export const CheckResultsWrap = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  @media (max-width: 768px) {
    max-width: 500px;
    justify-content: center;
  }
`;
export const CheckResults = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  background-color: #795bf5;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  font-size: 22px;

  @media (max-width: 957px) {
    font-size: 18px;
  }

  @media (max-width: 865px) {
    font-size: 16px;
  }

  @media (max-width: 782px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 403px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }

  &:hover {
    background-color: #967ff3;
  }
`;

export const HeroRight = styled.div`
    width:100%;
    max-width: 500px;
    display: flex;
    justify-content: flex-end;

    @media (max-width:768px)
    {
        justify-content: center;
    }
   
`

export const HeroRightImg = styled.img`
  width: 450px;
  border-radius: 100%;
  animation: rotate 10s linear infinite; /* Animation name, duration, timing function, and infinite loop */
  transition: transform 0.3s ease;

  @media (max-width: 957px) {
    width: 400px;
  }

  @media (max-width: 865px) {
    width: 380px;
  }

  @media (max-width: 865px) {
    width: 360px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 250px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg); /* Start at 0 degrees */
    }
    100% {
      transform: rotate(360deg); /* End at 360 degrees (full circle) */
    }
  }
`;
