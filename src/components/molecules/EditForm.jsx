import ListFormBtn from "@atoms/list/ListFormBtn";
import QuesInput from "@atoms/qna/QuesInput";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { updateQnaPostsFn } from "src/api/qnaApi";

const Form = styled.form`
  width: calc(52vw - 4rem);
  margin-bottom: 1.4rem;
  border-radius: 2rem;
  padding: 1.2rem 1.7rem;
  background: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

const InputBox = styled.div`
  overflow: hidden;
  width: calc(52vw - 7.4rem);
  height: 3.4rem;
  border-radius: 2.5rem;
  padding: 0 0.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

export default function EditForm({ idx, question, desc, isPrivate }) {
  const [quesInfo, setQuesInfo] = useState({
    isPrivate: isPrivate,
    question: question,
    description: desc,
  });
  const { mutate } = useMutation("updateQnaPostsFn", updateQnaPostsFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllQnaPostsFn");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ idx, quesInfo });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <PvtChkBox isPrivate={quesInfo.isPrivate} setQuesInfo={setQuesInfo} />
        <QuesInput ques={quesInfo.question} setQuesInfo={setQuesInfo} />
        <ListFormBtn name="Edit" />
      </InputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea desc={quesInfo.description} setQuesInfo={setQuesInfo} />
      )}
    </Form>
  );
}
