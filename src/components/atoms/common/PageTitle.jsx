import styled from "styled-components";

const Title = styled.h1`
  font-size: 5.5rem;
  margin-bottom: 2.5rem;
  font-family: "DM Serif Display", serif;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}
