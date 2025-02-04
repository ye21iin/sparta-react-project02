import React from "react";
import styled from "styled-components";

const DashContainer = styled.div`
  background-color: rgb(248, 248, 248);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  border-radius: 10px;
`;

const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;

  padding: 20px;
  background-color: white;
  border: 2px dashed black;
  border-radius: 5px;
`;

const Dashboard = () => {
  return (
    <DashContainer>
      <h2>나만의 포켓몬</h2>
      <CardContainer>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </CardContainer>
    </DashContainer>
  );
};

export default Dashboard;
