import styled from "styled-components";

const Title = styled.h1`
  width: 100%;
  padding: 0.6rem 0 1.2rem 0;
  border-bottom: 2px solid #cecdcd;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.darkLiver};
  font-family: "Merriweather", serif;
  font-weight: bold;
  font-size: 2.7rem;
  text-align: center;
`;

export default function ModalTitle({ title }) {
  return <Title>{title}</Title>;
}
