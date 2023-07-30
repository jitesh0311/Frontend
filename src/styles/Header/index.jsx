import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    max-width: 1500px;
    display: flex;
    align-items:center;
    justify-content: center;
    min-height: 150px;
    padding-inline: 15px;
`

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 150px;
    
`


export const NavLeft = styled.div`
    
`

export const Logo = styled.img`
    width:180px;

    @media (max-width:768px)
    {
        width: 160px;
    }

    @media (max-width:425px)
    {
        width: 130px;
    }

    @media (max-width:375px)
    {
       width:110px;
    }
`

export const NavRight = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 80px;
`

export const CallResults = styled.button`
  color: #fffefee6;
  font-size: 20px;
  background-color: transparent;
  border: none;
  /* background-color: #795bf5; */
  position: relative;
  padding: 9px;
  border-radius: 25px;
  /* border: 2px solid black; */
  cursor: pointer;

  &:hover {
    background-color: #967ff3;
  }
`;