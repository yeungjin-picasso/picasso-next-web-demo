import styled from "styled-components";

const Title = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  font-family: "Merriweather", serif;
  overflow: hidden;
  word-break: break-all;
  margin-right: 2rem;
`;

export default function PostTitle({ title }) {
  return <Title>{title}</Title>;
}
