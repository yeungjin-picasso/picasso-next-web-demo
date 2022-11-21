import Icon from "@atoms/Icon";
import ListElBox from "@atoms/ListElBox";
import ListId from "@atoms/ListId";
import ListTitle from "@atoms/ListTitle";
import ListWriteInfo from "@atoms/ListWriteInfo";
import Answer from "@atoms/qna/Answer";
import { useState } from "react";
import styled from "styled-components";

const IconBox = styled.div`
  margin-top: 1.6rem;
`;

export default function ListElement({
  qna: { id, isPrivate, question, writer, createdAt, answer },
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const isAnswered = answer.length > 0 ? true : false;
  const handleShow = () => {
    if (!isPrivate && isAnswered) {
      setShowAnswer(!showAnswer);
    } else if (false) {
      // 비공개 게시물이어도 자기가 올린 글이면 볼 수 있도록 조건 추가해야함.
      setShowAnswer(!showAnswer);
    }
  };

  return (
    <ListElBox onClick={handleShow}>
      <ListId id={id} />
      <div className="grow mt-2">
        <ListWriteInfo writer={writer} createdAt={createdAt} />
        <ListTitle isPrivate={isPrivate} title={question} answer={answer} />
        {showAnswer && <Answer answer={answer} />}
      </div>
      <IconBox>
        {!isAnswered && !showAnswer && (
          <Icon name="incomplete" width={32} height={32} />
        )}
        {isAnswered && !showAnswer && (
          <Icon name="complete" width={32} height={32} />
        )}
      </IconBox>
    </ListElBox>
  );
}
