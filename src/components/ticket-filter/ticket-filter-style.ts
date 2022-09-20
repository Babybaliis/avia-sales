import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  font-size: 34px;
  color: #CDCDCD;
  border-color: teal;
  transition: color 0.2s ease-out;
`;

export const H5 = styled.h5`
  margin: 0;
  padding: 20px 0 10px 20px ;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: rgba(74, 74, 74, 1);
  letter-spacing: 0.5px;
`

export const DivFilter = styled.div`
  background-color: white;
  height: 252px ;
  width: 232px;
  border-radius: 10px;
  box-shadow: 0 0 10px #c6c5c57d;
`;

export const  DivCheckbox = styled.div`
  line-height: 2.5;
  vertical-align:middle;
  padding: 0 20px;
  &:hover{
    background: #F1FCFF;
    cursor: pointer;
  }
`

export const InputFilter = styled(Checkbox)`
  transform: scale(1.5);
  margin-right: 5px;
`

