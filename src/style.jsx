import styled from "styled-components";

export const DashContainer = styled.div`
  background-color: rgb(248, 248, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: 20px auto;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  margin: 20px auto 0px;
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0; // 부모 요소의 크기가 부족해도 크기가 줄어들지 않음.

  padding: 20px;
  background-color: white;
  border: 2px dashed black;
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CardListContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const NameTag = styled.div`
  h4 {
  }
  p {
  }
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
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

export const BackBtn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;

  border: 3px solid #808080;
  border-radius: 5px;
  background-color: #808080;
  color: #f4f4f4;

  &:hover {
    background-color: #696969;
    border-color: #696969;
    color: #e0e0e0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoImg = styled.img`
  width: 600px;
  margin-bottom: 30px;
`;

export const HomeBtn = styled.button`
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
