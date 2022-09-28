import styled from "styled-components";

export const Section = styled.section`
  background-color: white;
  height: 184px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #c6c5c57d;
  max-width: 502px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  opacity: 0;
  animation: ani 1.5s forwards;
  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 660px) {
    padding: 10px;
  }
  @media (max-width: 430px) {
    padding: 20px 10px 20px 10px;
  }
`;

export const DivPrices = styled.div`
  display: flex;
  color: #2196f3;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  @media (max-width: 673px) {
    font-size: 18px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  @media (max-width: 660px) {
    padding: 10px;
  }
  @media (max-width: 430px) {
    padding: 10px 10px 20px 10px;
  }
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DivFlexInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(74, 74, 74, 1);
  font-size: 17px;
  font-weight: 600;
  width: 120px;
  @media (max-width: 673px) {
    width: 110px;
    font-size: 10px;
  }

  @media (max-width: 430px) {
    font-size: 9px;
  }

  @media (max-width: 380px) {
    font-size: 7px;
  }
`;

export const DivFlyInfo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(160, 176, 185, 1);
  @media (max-width: 673px) {
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
`;

export const DivMargin = styled.div`
  margin: 0 5px 0 5px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const DivFlyTime = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(160, 176, 185, 1);
  text-transform: uppercase;
  @media (max-width: 673px) {
    width: 85px;
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
`;

export const DivFlyTransfers = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(160, 176, 185, 1);
  text-transform: uppercase;
  @media (max-width: 673px) {
    width: 185px;
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
`;

export const DivFlying = styled.div`
  color: rgba(74, 74, 74, 1);
  text-transform: lowercase;
  color: #4a4a4a;
  font-size: 17px;
  font-style: normal;
  font-weight: 550;
  width: 80px;
  @media (max-width: 673px) {
    width: 50px;
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  color: rgba(74, 74, 74, 1);
  font-weight: 600;
  font-size: 14px;
  width: 120px;
  @media (max-width: 673px) {
    width: 100px;
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
`;
