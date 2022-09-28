import styled from "styled-components";

export const Section = styled.section`
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  @media (max-width: 660px) {
    font-size: 10px;
    max-width: 450px;
    width: 100%;
  }
  @media (max-width: 430px) {
    font-size: 10px;
    max-width: 325px;
    width: 100%;
  }
  @media (max-width: 380px) {
    font-size: 10px;
    max-width: 290px;
    width: 100%;
  }
`;

export const ImgLogo = styled.img`
  display: block;
  margin: 0 auto 50px;
  padding-top: 50px;
`;

export const DivTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 0 auto;
  max-width: 790px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
`;
