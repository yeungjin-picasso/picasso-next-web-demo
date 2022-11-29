import Icon from "@atoms/common/Icon";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteCommentFn } from "src/api/commentApi";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconBox = styled.button`
  padding: 0.7rem;
  background-color: white;
  margin-left: 0.7rem;
  border-radius: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.09),
      0 0.5px 1px rgba(0, 0, 0, 0.18);
  }
`;

export default function CommentBtnGroup({ id }) {
  const { mutate } = useMutation("deleteCommentFn", deleteCommentFn, {
    onSuccess: () => {
      // getAllCommentsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllCommentsFn");
    },
  });
  const [editMode, setEditMode] = useState(false);

  const deleteComment = () => {
    mutate(id);
  };

  return (
    <Group>
      <IconBox onClick={() => setEditMode(false)}>
        <Icon name="edit" width="28" height="28" />
      </IconBox>
      <IconBox onClick={deleteComment}>
        <Icon name="trash" width="28" height="28" />
      </IconBox>
    </Group>
  );
}
