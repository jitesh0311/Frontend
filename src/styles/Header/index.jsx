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
    max-width: 1250px;
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

export const CallResults = styled.a`
    text-decoration: none;
    color:black;
    font-size: 30px;
    position: relative;
    &:hover{
        color:red;
    }
    &:hover::before{
        content : "";
        position: absolute;
        bottom:-2px;
        width:100%;
        max-width: 185px;
        min-height: 3px;
        background-color: black;
    }

    @media (max-width:768px)
    {
        font-size: 26px;
    }

    @media (max-width:425px)
    {
        font-size: 20px;
    }

    @media (max-width:375px)
    {
        font-size: 16px;
    }
`