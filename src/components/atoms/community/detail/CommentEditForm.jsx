import { useMutation } from "@tanstack/react-query";
import { updateCommentFn } from "src/api/commentApi";
import { queryClient } from "src/pages/_app";
import styled from "styled-components";

const Textarea = styled.textarea`
  font-size: 1.5rem;
  border-radius: 1rem;
  width: 100%;
  height: 8rem;
  margin-top: 0.8rem;
  resize: none;
  padding: 1rem 1.2rem;
  line-height: 2rem;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &:focus {
    outline: none;
  }
`;
export default function CommentEditForm({
  id,
  editText,
  setEditText,
  setEditMode,
}) {
  const { mutate } = useMutation(["updateCommentFn"], updateCommentFn, {
    onSuccess: () => {
      // getAllCommentsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getAllCommentsFn");
    },
  });

  const onChange = (e) => {
    setEditText(e.target.value);
  };

  const onSubmit = () => {
    mutate(id, editText);
    setEditMode(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Textarea required onChange={onChange} value={editText} />
    </form>
  );
}
