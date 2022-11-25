import Listidx from "@atoms/list/ListIdx";
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
  qna: { idx, isPrivate, question, description, writer, createdAt, answer },
}) {
  const userName = useRecoilValue(userAtom)?.nickname;
  const [showAnswer, setShowAnswer] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const isWriter = useMemo(() => userName === writer, []);
  const handleShow = () => {
    if ((!isPrivate || isWriter) && answer.length > 0) {
      setShowAnswer(!showAnswer);
    }
  };

  if (!editMode) {
    return (
      <ListElemBox onClick={handleShow}>
        <Listidx idx={idx} />
        <div className="grow mt-2 pb-7">
          <ListWriteInfo
            writer={writer}
            isWriter={isWriter}
            createdAt={createdAt}
          />
          <ListTitle
            isPrivate={isPrivate}
            isWriter={isWriter}
            title={question}
          />
          {showAnswer && <QuesDetail desc={description} answer={answer} />}
        </div>
        <QuesIconBox
          isWriter={userName === writer}
          isAnswered={answer.length > 0}
          setEditMode={setEditMode}
        />
      </ListElemBox>
    );
  }

  return (
    <QuesEditForm
      idx={idx}
      question={question}
      desc={description}
      isPrivate={isPrivate}
    />
  );
}
