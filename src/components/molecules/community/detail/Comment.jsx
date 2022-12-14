import CancelCommentBtn from "@atoms/community/detail/CancelCommentBtn";
import CommentContent from "@atoms/community/detail/CommentContent";
import CommentCreatedAt from "@atoms/community/detail/CommentCreatedAt";
import CommentEditForm from "@atoms/community/detail/CommentEditForm";
import CommentWriter from "@atoms/community/detail/CommentWriter";
import EditCommentBtn from "@atoms/community/detail/EditCommentBtn";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import styled from "styled-components";
import CommentBtnGroup from "./CommentBtnGroup";

const Container = styled.div`
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.colors.cultured};
  color: ${({ theme }) => theme.colors.dimGray};
  padding: 1.2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
`;

export default function Comment({
  comment: { comment_num, writer, comment, created_at },
}) {
  const userName = useRecoilValue(userAtom)?.user_nickname;
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(comment);

  if (!editMode) {
    return (
      <Container>
        <CommentWriter writer={writer} />
        <CommentContent comment={comment} />
        <div className="flex justify-between items-end">
          <CommentCreatedAt createdAt={created_at} />
          {userName === writer && (
            <CommentBtnGroup id={comment_num} setEditMode={setEditMode} />
          )}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex justify-between items-center pl-2">
        <CommentWriter writer={writer} />
        <div className="flex">
          <EditCommentBtn
            id={comment_num}
            editText={editText}
            setEditMode={setEditMode}
          />
          <CancelCommentBtn
            comment={comment}
            setEditText={setEditText}
            setEditMode={setEditMode}
          />
        </div>
      </div>
      <CommentEditForm
        id={comment_num}
        editText={editText}
        setEditText={setEditText}
        setEditMode={setEditMode}
      />
    </Container>
  );
}
