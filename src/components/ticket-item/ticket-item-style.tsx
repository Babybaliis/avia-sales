import styled from "styled-components";

export const Section = styled.section`
  background-color: white;
  height: 184px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #c6c5c57d;
  max-width: 502px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;

`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const DivFlexInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: rgba(74, 74, 74, 1);
  font-size: 14px;
  font-weight: 600;;
`
export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 20px 20px 20px;
`


export const DivPrices = styled.div`
  display: flex;
  color: #2196F3;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
`

export const DivFlyInfo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(160, 176, 185, 1);
  margin-bottom: 1px;
`

export const DivFlyTime = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(160, 176, 185, 1);
  text-transform: uppercase;
`
export const DivFlying = styled.div`
  color: rgba(74,74,74,1);
  font-weight: 600;
  font-size: 14px;
  text-transform: lowercase;
`
export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  color: rgba(74, 74, 74, 1);
  font-weight: 600;
  font-size: 14px;

`
export const DivMargin = styled.div`
  margin: 0 5px 0 5px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`


