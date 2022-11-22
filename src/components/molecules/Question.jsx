import ListElemBox from "@atoms/list/ListElemBox";
import ListId from "@atoms/list/ListId";
import ListTitle from "@atoms/list/ListTitle";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import QuesIconBox from "@molecules/QuesIconBox";
import QuesDetail from "@molecules/QuesDetail";
import EditForm from "@molecules/EditForm";
import { useState } from "react";
import { userNameAtom } from "src/states";
import { useRecoilValue } from "recoil";

export default function Question({
  qna: { id, isPrivate, question, description, writer, createdAt, answer },
}) {
  const nickname = useRecoilValue(userNameAtom);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleShow = () => {
    if (!isPrivate && answer.length > 0) {
      setShowAnswer(!showAnswer);
    } else if (false) {
      // 비공개 게시물이어도 자기가 올린 글이면 볼 수 있도록 조건 추가해야함.
      setShowAnswer(!showAnswer);
    }
  };
  if (!isEditMode) {
    return (
      <ListElemBox onClick={handleShow}>
        <ListId id={id} />
        <div className="grow mt-2 pb-7">
          <ListWriteInfo writer={writer} createdAt={createdAt} />
          <ListTitle isPrivate={isPrivate} title={question} answer={answer} />
          {showAnswer && <QuesDetail desc={description} answer={answer} />}
        </div>
        <QuesIconBox
          isWriter={nickname === writer}
          isAnswered={answer.length > 0}
          setIsEditMode={setIsEditMode}
        />
      </ListElemBox>
    );
  }

  return (
    <EditForm question={question} desc={description} isPrivate={isPrivate} />
  );
}