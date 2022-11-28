import styled from "styled-components";

const Title = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  font-family: "Merriweather", serif;
`;

export default function PostTitle({ title }) {
  return <Title>{title}</Title>;
}
