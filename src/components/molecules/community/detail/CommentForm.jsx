import CommentInput from "@atoms/community/detail/CommentInput";
import CommentUser from "@atoms/community/detail/CommentUser";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { createCommentFn } from "src/api/commentApi";
import { userAtom } from "src/states";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 1.5rem;
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

export default function CommentForm({ post_id }) {
  const userName = useRecoilValue(userAtom)?.nickname;
  const [comment, setComment] = useState("");
  const { mutate } = useMutation("createCommentFn", createCommentFn, {
    onSuccess: () => {
      // getAllCommentsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllCommentsFn");
    },
  });

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ post_id: post_id, data: { writer: userName, comment: comment } });
  };

  return (
    <Form onSubmit={onSubmit}>
      <CommentUser userName={userName} />
      <CommentInput onChange={onChange} />
      <Button>Comment</Button>
    </Form>
  );
}
