import styled from "styled-components";

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function CommentWriter({ writer }) {
  return <Text>{writer}</Text>;
}
