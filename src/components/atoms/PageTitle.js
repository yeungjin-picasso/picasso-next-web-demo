import styled from "styled-components";

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}
