import ListId from "@atoms/list/ListId";
import ListElemBox from "@atoms/list/ListElemBox";
import ListTitle from "@atoms/list/ListTitle";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import AdminForm from "@atoms/qna/AdminForm";
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
  const user = useRecoilValue(userAtom); // 현재 사용자 정보 가져옴
  const userName = user?.user_nickname; // 현재 사용자 닉네임
  const permission = user?.permission; // 현재 사용자 권한(관리자는 0, 일반사용자는 1)
  const [editMode, setEditMode] = useState(false); // 수정 모드
  const [showAnswer, setShowAnswer] = useState(false); // 답변 보여줄 건지 체크
  const isAdmin = useMemo(() => permission === 0, [permission]); // 관리자인지 체크
  const isWriter = useMemo(() => userName === writer, [userName, writer]); // 작성자인지 체크

  // 답변 보여주는 함수
  const handleShow = () => {
    // 관리자 계정일때
    if (isAdmin) {
      setShowAnswer(true);
      return;
    }

    // 일반 사용자 계정이고 답변이 있을 때
    if (answer?.length > 0) {
      setShowAnswer(true);
      // 비공개글아니거나 본인 글일때
      if (!isPrivate || isWriter) {
        setShowAnswer(true);
      }
    } else {
      setShowAnswer(false);
    }
  };

  if (!editMode) {
    return (
      <ListElemBox onClick={handleShow}>
        <ListId id={question_num} />
        <div className="grow mt-2 pb-9">
          <ListWriteInfo
            writer={writer}
            isWriter={isWriter}
            createdAt={created_at}
          />
          <ListTitle
            isAdmin={isAdmin}
            isPrivate={isPrivate}
            isWriter={isWriter}
            title={question}
          />
          {showAnswer && (
            // list element를 클릭했을때
            <>
              {!isAdmin && <QuesDetail desc={description} answer={answer} />}
              {isAdmin && (
                <AdminForm
                  id={question_num}
                  inputValue={answer?.length > 0 ? answer : ""}
                />
              )}
            </>
          )}
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
