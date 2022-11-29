import Icon from "@atoms/common/Icon";
import { useMutation } from "@tanstack/react-query";
import { updateCommentFn } from "src/api/commentApi";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.09),
      0 0.5px 1px rgba(0, 0, 0, 0.18);
  }
`;

export default function EditCommentBtn({ id, editText, setEditMode }) {
  const { mutate } = useMutation("updateCommentFn", updateCommentFn, {
    onSuccess: () => {
      // getAllCommentsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getAllCommentsFn");
    },
  });
  const editComment = () => {
    mutate(id, editText);
  };

  return (
    <Button onClick={editComment}>
      <Icon name="edit" width="28" height="28" />
    </Button>
  );
}
