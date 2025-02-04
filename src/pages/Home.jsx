import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => (location.href = "/dex")}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
