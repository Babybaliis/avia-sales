import styled from "styled-components";

export const SectionTabs = styled.section`
  max-width: 502px;
  width: 100%;
  @media(max-width:660px) {
    font-size: 10px;
    max-width: 400px;
    width: 100%;
  }
`

export const DivTickets = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputButtonAdd = styled.input`
  background-color: #2196f3;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  height: 50px;
  letter-spacing: .5px;
  line-height: 20px;
  max-width: 502px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
`