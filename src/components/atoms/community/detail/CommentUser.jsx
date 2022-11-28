import styled from "styled-components";

const Name = styled.div`
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
  width: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dimGray};
  margin-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function CommentUser({ userName }) {
  return <Name>{userName}</Name>;
}
