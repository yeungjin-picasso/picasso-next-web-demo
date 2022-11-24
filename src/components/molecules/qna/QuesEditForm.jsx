import ListFormBtn from "@atoms/list/ListFormBtn";
import ListForm from "@atoms/list/listForm";
import QuesInput from "@atoms/qna/QuesInput";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import ListInputBox from "@atoms/list/ListInputBox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateQnaPostsFn } from "src/api/qnaApi";

export default function QuesEditForm({ idx, question, desc, isPrivate }) {
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
    <ListForm onSubmit={handleSubmit}>
      <ListInputBox>
        <PvtChkBox isPrivate={quesInfo.isPrivate} setQuesInfo={setQuesInfo} />
        <QuesInput ques={quesInfo.question} setQuesInfo={setQuesInfo} />
        <ListFormBtn name="Edit" />
      </ListInputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea desc={quesInfo.description} setQuesInfo={setQuesInfo} />
      )}
    </ListForm>
  );
}
