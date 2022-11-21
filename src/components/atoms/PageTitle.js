import styled from "styled-components";

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2.5rem;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}
