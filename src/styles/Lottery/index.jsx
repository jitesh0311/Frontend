import styled from "styled-components"

export const LotterySect = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LotteryWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center
`

export const FrameWrapper = styled.div`
  position: relative;
`


export const Frame = styled.img`
  width: 600px;

  @media (max-width: 660px) {
    width: 500px;
  }

  @media (max-width: 560px) {
    width: 400px;
  }

  @media (max-width: 452px) {
    width: 350px;
  }

  @media (max-width: 407px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }
`;
export const RollWrapper = styled.div`
  position: absolute;
  bottom: 160px;
  left: 110px;
  display: flex;
  gap:30px;
`;
export const RollUp = styled.img`
`

export const RollDown = styled.img`
  
` 

export const RandomImgWrapper = styled.div`
  position: absolute;
  bottom: 160px;
  left: 90px;
  display: flex;
  gap: 40px;

  @media (max-width: 660px) {
    bottom: 130px;
    left: 90px;
  }

  @media (max-width: 560px) {
    bottom: 100px;
    left: 80px;
  }

  @media (max-width: 452px) {
    bottom: 90px;
    left: 60px;
  }

  @media (max-width: 407px) {
    bottom: 80px;
    left: 50px;
  }

  @media (max-width: 360px) {
    bottom: 70px;
    left: 50px;
  }
`;



export const RandomImg = styled.img`
  width: 90px;

  @media (max-width: 660px) {
    width: 70px;
  }

  @media (max-width: 560px) {
    width: 50px;
  }

  @media (max-width: 452px) {
    width: 50px;
  }

  @media (max-width: 407px) {
    width: 40px;
  }

  @media (max-width: 360px) {
    width: 30px;
  }
`;