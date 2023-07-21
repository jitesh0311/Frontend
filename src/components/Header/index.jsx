import React from 'react'
import {CallResults,Logo, Nav, NavLeft, NavRight, NavWrapper } from '../../styles/Header'
import LogoImg from '../../assets/LogoImg.png'

const Header = () => {
  return (
    <Nav>
      <NavWrapper>
        <NavLeft>
          <Logo src = {LogoImg}/>
        </NavLeft>
        <NavRight>
            <CallResults href = "#">
              Contact Us
            </CallResults>
        </NavRight>
      </NavWrapper>
    </Nav>
  )
}

export default Header