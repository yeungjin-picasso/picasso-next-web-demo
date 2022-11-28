import CommentInput from "@atoms/community/detail/CommentInput";
import CommentUser from "@atoms/community/detail/CommentUser";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.cultured};
  border: 1px solid ${({ theme }) => theme.colors.dimGray};
`;

const Button = styled.button`
  padding: 0 1rem;
  margin-left: 1rem;
  height: 3rem;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.dimGray};
`;

export default function CommentForm() {
  const userName = useRecoilValue(userAtom)?.nickname;
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <CommentUser userName={userName} />
      <CommentInput onChange={onChange} />
      <Button>Comment</Button>
    </Form>
  );
}
