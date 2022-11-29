import styled from "styled-components";

const Text = styled.div`
  font-size: 1.5rem;
  line-height: 2.2rem;
  margin: 0.9rem 0;
`;

export default function CommentContent({ comment }) {
  return <Text>{comment}</Text>;
}
