import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Hero from "../../views/Hero";
import Test from "../../views/Test";


const Home = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
  `;
  return (
    <Container>
      <Header />
      <Hero />
      <Test />
    </Container>
  );
};

export default Home;
