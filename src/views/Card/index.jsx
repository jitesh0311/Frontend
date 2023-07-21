import React from "react";
import {
  Anchor,
  CardWrapper,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  Register,
} from "../../styles/Card";
import Checklist from "../../assets/Register.png";
import Deposit from "../../assets/Deposit.png";
import SlotMachine from "../../assets/Slot.avif";

const Card = () => {
  return (
    <CardWrapper>
      {/* First Flip Card */}
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <Register src={Checklist} alt="" />
          </FlipCardFront>
          <FlipCardBack>
            <Anchor>Register Now!</Anchor>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>

      {/* Second Flip Card */}
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <Register src={Deposit} alt="" />
          </FlipCardFront>
          <FlipCardBack>
            <Anchor>Deposit Now!</Anchor>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>

      {/* Third Flip Card */}
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <Register src={SlotMachine} alt="" />
          </FlipCardFront>
          <FlipCardBack>
            <Anchor>Play Now!</Anchor>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </CardWrapper>
  );
};

export default Card;
