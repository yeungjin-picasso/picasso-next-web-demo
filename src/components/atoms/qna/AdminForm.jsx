import { useMutation } from "node_modules/@tanstack/react-query/build/lib/useMutation";
import { useState } from "react";
import { updateQnaPostFn } from "src/api/qnaApi";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 1.2rem;
`;

const Button = styled.button`
  font-size: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.falcon};
  padding: 0.7rem 0.8rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.falcon};

  &:hover {
    background-color: ${({ theme }) => theme.colors.squirrel};
  }
`;

const Answer = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.falcon};
  padding: 0.4rem 0.8rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 9.6rem;
  resize: none;
  overflow-y: scroll;
  font-size: 1.2rem;
  letter-spacing: 1.4px;
  line-height: 1.7rem;

  &:focus {
    outline: none;
  }
`;

export default function AdminForm({ inputValue, id }) {
  const [answer, setAnswer] = useState(inputValue);
  const { mutate } = useMutation(["updateQnaPostFn"], updateQnaPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getAllQnaPostsFn");
    },
  });
  const postAnswer = (e) => {
    e.preventDefault();
    mutate({ id, data: { answer: answer } });
  };

  return (
    <Form>
      <Answer value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <Button onClick={postAnswer}>Post Answer</Button>
    </Form>
  );
}
