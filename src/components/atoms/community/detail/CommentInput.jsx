import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 1rem;
  padding: 0 1.2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.dimGray};

  &:focus {
    outline: none;
  }
`;

export default function CommentInput({ onChange }) {
  return <Input placeholder="Leave a comment here." onChange={onChange} />;
}
