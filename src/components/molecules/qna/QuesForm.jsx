import ListFormBtn from "@atoms/list/ListFormBtn";
import QuesInput from "@atoms/qna/QuesInput";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import ListForm from "@atoms/list/listForm";
import ListInputBox from "@atoms/list/ListInputBox";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import { useMutation } from "@tanstack/react-query";
import { createQnaPostFn } from "src/api/qnaApi";

export default function QuesForm() {
  const userName = useRecoilValue(userAtom)?.nickname;

  const { mutate } = useMutation("createQnaPostFn", createQnaPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllQnaPostsFn");
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
    setPosts();
  };

  return (
    <ListForm onSubmit={handleSubmit}>
      <ListInputBox>
        <PvtChkBox setQuesInfo={setQuesInfo} />
        <QuesInput ques={quesInfo.question} setQuesInfo={setQuesInfo} />
        <ListFormBtn name="Ask" />
      </ListInputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea desc={quesInfo.description} setQuesInfo={setQuesInfo} />
      )}
    </ListForm>
  );
}
