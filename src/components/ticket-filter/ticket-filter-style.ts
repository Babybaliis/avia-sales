import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  font-size: 34px;
  color: #cdcdcd;
  border-color: teal;
  transition: color 0.2s ease-out;
`;

export const DivFilter = styled.div`
  background-color: white;
  height: 252px;
  max-width: 232px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px #c6c5c57d;
  margin-right: 20px;
  padding: 20px;
  @media (max-width: 707px) {
    font-size: 10px;
    padding: 16px;
  }
  @media (max-width: 380px) {
    height: 231px;
    padding: 8px;
  }
`;

export const H5 = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: rgba(74, 74, 74, 1);
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  @media (max-width: 673px) {
    margin-bottom: 20px;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
`;

export const DivCheckbox = styled.div`
  line-height: 2.5;
  vertical-align: middle;

  &:hover {
    background: #f1fcff;
    cursor: pointer;
  }
  @media (max-width: 430px) {
    line-height: 2.5;
    font-size: 6px;
  }
`;

export const InputFilter = styled(Checkbox)`
  transform: scale(1.5);
  margin-right: 10px;
  @media (max-width: 673px) {
    margin-right: 9px;
  }
  @media (max-width: 430px) {
    transform: scale(0.9);
    margin-right: 2px;
  }
`;
