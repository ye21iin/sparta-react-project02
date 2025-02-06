import React from "react";
import { HomeContainer, HomeBtn, LogoImg } from "../style";

const Home = () => {
  return (
    <HomeContainer>
      <LogoImg src="/pokemon-logo.png" alt="Logo" />
      <HomeBtn type="button" onClick={() => (location.href = "/dex")}>
        포켓몬 도감 시작하기
      </HomeBtn>
    </HomeContainer>
  );
};

export default Home;
