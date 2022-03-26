import styled from "styled-components";

const ContentSection = styled.section`
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif", serif;
  font-size: 2rem;
  font-weight: 700;
  > div {
    cursor: pointer;
  }
  &:after {
    flex: 1;
    content: "";
    border-top: #e3dccf 0.25rem solid;
    margin-left: 1.5rem;
  }
`;

export { ContentSection, Title };
