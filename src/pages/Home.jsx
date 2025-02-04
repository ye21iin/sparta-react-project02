import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Img = styled.img`
  width: 600px;
  margin-bottom: 30px;
`;

const Btn = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 400;

  border: 3px solid red;
  border-radius: 5px;
  background-color: red;
  color: #f4f4f4;

  &:hover {
    background-color: darkred;
    border-color: darkred;
    color: #e0e0e0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Img src="/public/pokemon-logo.png" alt="Logo" />
      <Btn type="button" onClick={() => (location.href = "/dex")}>
        포켓몬 도감 시작하기
      </Btn>
    </HomeContainer>
  );
};

export default Home;
