import styled from "styled-components";

const Text = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.novel};
`;

export default function CommentCreatedAt({ createdAt }) {
  return <Text>{createdAt}</Text>;
}
