import React from 'react'
import {CallResults,Logo, Nav, NavLeft, NavRight, NavWrapper } from '../../styles/Header'
// import LogoImg from '../../assets/LogoImg.png'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleCallResultsClick = () => {
    navigate("/Login");
  };
  return (
    <Nav>
      <NavWrapper>
        <NavLeft>
          {/* <Logo src={LogoImg} /> */}
          <h1>Bhutan<span>X</span>Pro</h1>
        </NavLeft>
        {/* <NavRight>
          <CallResults onClick={handleCallResultsClick}>Admin</CallResults>
        </NavRight> */}
      </NavWrapper>
    </Nav>
  );
}

export default Header