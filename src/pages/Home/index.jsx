import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Hero from '../../views/Hero'
import Card from '../../views/Card'
import Lottery from '../../views/Lottery'
import Table from '../../views/Table'
import AdminPanel from '../../views/AdminPanel'




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
        {/* <Header/> */}
        {/* <Hero/> */}
        {/* <Card /> */}
        <Lottery />
        <Table />
        <AdminPanel />
    </Container>
  )
}

export default Home