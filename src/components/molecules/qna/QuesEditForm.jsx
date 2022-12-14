import ListFormBtn from "@atoms/list/ListFormBtn";
import ListForm from "@atoms/list/ListFormBox";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import ListInputBox from "@atoms/list/ListInputBox";
import ListInput from "@atoms/list/ListInput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateQnaPostFn } from "src/api/qnaApi";
import { queryClient } from "src/pages/_app";

export default function QuesEditForm({
  id,
  question,
  desc,
  isPrivate,
  setEditMode,
}) {
  const [quesInfo, setQuesInfo] = useState({
    isPrivate: isPrivate,
    question: question,
    description: desc,
  });
  const { mutate } = useMutation(["updateQnaPostFn"], updateQnaPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getAllQnaPostsFn");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ id, data: quesInfo });
    setEditMode(false);
  };

  const handleChange = (e) => {
    setQuesInfo((prev) => ({ ...prev, question: e.target.value }));
  };

  return (
    <ListForm onSubmit={handleSubmit}>
      <ListInputBox>
        <PvtChkBox isPrivate={quesInfo.isPrivate} setQuesInfo={setQuesInfo} />
        <ListInput
          placeholder="Ask a question"
          value={quesInfo.question}
          onChange={handleChange}
        />
        <ListFormBtn name="Edit" />
      </ListInputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea desc={quesInfo.description} setQuesInfo={setQuesInfo} />
      )}
    </ListForm>
  );
}
