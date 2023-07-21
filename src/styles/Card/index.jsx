import styled from "styled-components";

export const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 1200px;
  height: 300px;
  /* perspective: 1000px; */
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transform: rotateY(180deg);
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 700px;
  width :100%;
  max-width: 1400px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipCardFront = styled.div`
  /* background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
     rgb(255, 211, 195) 40%, rgba(203, 17, 232, 0.365) 48%);
  color: coral; */
  /* box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2); */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* -webkit-backface-visibility: hidden; */
  /* backface-visibility: hidden; */
`;

export const FlipCardBack = styled.div`
  background: linear-gradient(
    120deg,
    rgb(255, 174, 145) 30%,
    coral 88%,
    bisque 40%,
    rgb(255, 185, 160) 78%
  );
  /* color: white; */
  transform: rotateY(180deg);
  /* box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2); */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  color: black;
`;

export const Register = styled.img`
  width: 300px;
  height: 300px;
  /* border: 1px solid coral; */
  border-radius: 1rem;
`;

export const Anchor = styled.a`
  background-color: #b0233a;
  color: white;
  padding: 12px 24px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 7px;
`
