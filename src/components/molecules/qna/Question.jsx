import ListId from "@atoms/list/ListId";
import ListElemBox from "@atoms/list/ListElemBox";
import ListTitle from "@atoms/list/ListTitle";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import QuesIconBox from "@molecules/qna/QuesIconBox";
import QuesDetail from "@molecules/qna/QuesDetail";
import QuesEditForm from "@molecules/qna/QuesEditForm";
import { useMemo, useState } from "react";
import { userAtom } from "src/states";
import { useRecoilValue } from "recoil";

export default function Question({
  qna: {
    question_num,
    isPrivate,
    question,
    description,
    writer,
    created_at,
    answer,
  },
}) {
  const userName = useRecoilValue(userAtom)?.user_nickname;
  const [showAnswer, setShowAnswer] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const isWriter = useMemo(() => userName === writer, [userName, writer]);
  const handleShow = () => {
    if ((!isPrivate || isWriter) && answer?.length > 0) {
      setShowAnswer(!showAnswer);
    }
  };

  if (!editMode) {
    return (
      <ListElemBox onClick={handleShow}>
        <ListId id={question_num} />
        <div className="grow mt-2 pb-7">
          <ListWriteInfo
            writer={writer}
            isWriter={isWriter}
            createdAt={created_at}
          />
          <ListTitle
            isPrivate={isPrivate}
            isWriter={isWriter}
            title={question}
          />
          {showAnswer && <QuesDetail desc={description} answer={answer} />}
        </div>
        <QuesIconBox
          id={question_num}
          isWriter={userName === writer}
          isAnswered={answer?.length > 0}
          setEditMode={setEditMode}
        />
      </ListElemBox>
    );
  }

  return (
    <QuesEditForm
      id={question_num}
      question={question}
      desc={description}
      isPrivate={isPrivate}
      setEditMode={setEditMode}
    />
  );
}
