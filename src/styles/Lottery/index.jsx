import styled from "styled-components";

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
  justify-content: center;
  gap: 50px;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FrameSect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateHeading = styled.h1`
  color: #fffefee6;
  font-size: 60px;
`;

export const FrameWrapper = styled.div`
  position: relative;
`;

export const Frame = styled.img`
  width: 400px;

  @media (max-width: 980px) {
    width: 350px;
  }

  @media (max-width: 858px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 560px) {
    width: 350px;
  }

  @media (max-width: 452px) {
    width: 300px;
  }

  @media (max-width: 407px) {
    width: 250px;
  }

  @media (max-width: 360px) {
    width: 200px;
  }
`;
export const RollWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 110px;
  display: flex;
  gap: 30px;

  @media (max-width: 980px) {
    left: 90px;
    bottom: 70px;
  }

  @media (max-width: 858px) {
    left: 60px;
    bottom: 60px;
  }

  @media (max-width: 768px) {
    left: 95px;
    bottom: 85px;
  }

  @media (max-width: 560px) {
    bottom: 75px;
    left: 80px;
  }

  @media (max-width: 452px) {
    bottom: 70px;
    left: 80px;
  }

  @media (max-width: 407px) {
    bottom: 55px;
    left: 65px;
  }

  @media (max-width: 360px) {
    bottom: 45px;
    left: 50px;
  }
`;
export const RollUp = styled.img`
  @media (max-width: 980px) {
    width: 85px;
  }

  @media (max-width: 858px) {
    width: 65px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 560px) {
    width: 70px;
  }

  @media (max-width: 452px) {
    width: 60px;
  }

  @media (max-width: 407px) {
    width: 50px;
  }

  @media (max-width: 360px) {
    width: 40px;
  }
`;

export const RollDown = styled.img`
  @media (max-width: 980px) {
    width: 85px;
  }

  @media (max-width: 858px) {
    width: 75px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 560px) {
    width: 70px;
  }

  @media (max-width: 452px) {
    width: 60px;
  }

  @media (max-width: 407px) {
    width: 50px;
  }

  @media (max-width: 360px) {
    width: 40px;
  }
`;

export const RandomImgWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  left: 110px;
  display: flex;
  gap: 40px;

  @media (max-width: 980px) {
    left: 90px;
    bottom: 70px;
  }

  @media (max-width: 858px) {
    left: 80px;
    bottom: 60px;
  }

  @media (max-width: 768px) {
    left: 110px;
    bottom: 80px;
  }

  @media (max-width: 560px) {
    bottom: 75px;
    left: 95px;
  }

  @media (max-width: 452px) {
    bottom: 60px;
    left: 80px;
  }

  @media (max-width: 407px) {
    bottom: 50px;
    left: 65px;
  }

  @media (max-width: 360px) {
    bottom: 70px;
    left: 50px;
  }

  @media (max-width: 360px) {
    bottom: 40px;
    left: 50px;
  }
`;

export const RandomImg = styled.img`
  width: 90px;

  @media (max-width: 980px) {
    width: 85px;
  }

  @media (max-width: 858px) {
    width: 75px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 560px) {
    width: 80px;
  }

  @media (max-width: 452px) {
    width: 70px;
  }

  @media (max-width: 407px) {
    width: 60px;
  }

  @media (max-width: 360px) {
    width: 50px;
  }
`;
