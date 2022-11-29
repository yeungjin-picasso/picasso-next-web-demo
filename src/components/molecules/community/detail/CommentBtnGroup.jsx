import CommentBtn from "@atoms/community/detail/CommentBtn";
import { useMutation } from "@tanstack/react-query";
import { deleteCommentFn } from "src/api/commentApi";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CommentBtnGroup({ id, setEditMode }) {
  const { mutate } = useMutation("deleteCommentFn", deleteCommentFn, {
    onSuccess: () => {
      // getAllCommentsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllCommentsFn");
    },
  });

  const deleteComment = () => {
    mutate(id);
  };

  return (
    <Group>
      <CommentBtn iconName="edit" onClick={() => setEditMode(true)} />
      <CommentBtn iconName="trash" onClick={deleteComment} />
    </Group>
  );
}
