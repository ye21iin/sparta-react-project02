import styled from "styled-components";

export const DashContainer = styled.div`
  background-color: rgb(248, 248, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: 20px;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  transition: transform 0.2s, box-shadow 0.2s;
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
