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
    justify-content: space-between;
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
    gap:35px;

    @media (max-width:768px)
    {
        text-align: center;
    }
    
`
export const HeadingWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
`
export const Heading1 = styled.h1`
    font-size: 30px;
    line-height: 1;
`

export const Heading2 = styled.p`
    line-height: 1;
`
export const CheckResultsWrap = styled.div`
    width:100%;
    max-width: 200px;
`
export const CheckResults = styled.a`
    padding: 10px 15px;
    text-decoration: none;
    background-color: #178ab8;
    color:white;
    border-radius: 10px;
`

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
    width: 400px;
    border-radius: 100%;

    @media (max-width:768px)
    {
        width: 300px;
    }

    @media (max-width:320px)
    {
        width: 250px;
    }
    
`
