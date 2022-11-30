import ListFormBtn from "@atoms/list/ListFormBtn";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import ListForm from "@atoms/list/ListFormBox";
import ListInputBox from "@atoms/list/ListInputBox";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import { useMutation } from "@tanstack/react-query";
import { createQnaPostFn } from "src/api/qnaApi";
import ListInput from "@atoms/list/ListInput";
import { queryClient } from "src/pages/_app";

export default function QuesForm() {
  const userName = useRecoilValue(userAtom)?.nickname;
  const { mutate } = useMutation(["createQnaPostFn"], createQnaPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getAllQnaPostsFn");
    },
  });
  const [quesInfo, setQuesInfo] = useState({
    writer: userName,
    isPrivate: true,
    question: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(quesInfo);
    setQuesInfo({
      writer: userName,
      isPrivate: true,
      question: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setQuesInfo((prev) => ({ ...prev, question: e.target.value }));
  };

  return (
    <ListForm onSubmit={handleSubmit}>
      <ListInputBox>
        <PvtChkBox setQuesInfo={setQuesInfo} />
        <ListInput
          placeholder="Ask a question"
          value={quesInfo.question}
          onChange={handleChange}
        />
        <ListFormBtn name="Ask" />
      </ListInputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea desc={quesInfo.description} setQuesInfo={setQuesInfo} />
      )}
    </ListForm>
  );
}
