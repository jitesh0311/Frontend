import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Hero from '../../views/Hero'
import Table from '../../views/Table'
import Card from '../../views/Card'
import Lottery from '../../views/Lottery'


const Home = () => {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:32px;
  `
  return (
    <Container>
        <Header/>
        <Hero/>
        <Card />
        {/* <Table/> */}
        <Lottery />
    </Container>
  )
}

export default Home