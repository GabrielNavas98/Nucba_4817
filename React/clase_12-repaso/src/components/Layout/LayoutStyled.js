import styled from "styled-components";

export const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

export const ContentContainerStyled = styled.div`
  height: calc(100vh - 120px);
`;