import Icon from "@atoms/common/Icon";
import { useMutation } from "@tanstack/react-query";
import { deleteQnaPostFn } from "src/api/qnaApi";
import { queryClient } from "src/pages/_app";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.6rem;
`;

const IconBox = styled.div`
  position: relative;
  display: flex;
  height: 32px;
`;

export default function QuesIconBox({ id, isWriter, isAnswered, setEditMode }) {
  const { mutate } = useMutation(["deleteQnaPostFn"], deleteQnaPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getAllQnaPostsFn");
    },
  });

  const handleEditMode = (e) => {
    e.stopPropagation();
    setEditMode(true);
  };

  const deleteItem = async (e) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <Wrapper>
      <IconBox>
        {isWriter && (
          <Icon
            name="trash"
            width={32}
            height={32}
            onClick={deleteItem}
            style={{ marginRight: "0.9rem", cursor: "pointer" }}
          />
        )}
        {isWriter && !isAnswered && (
          <Icon
            name="edit"
            width={32}
            height={32}
            onClick={handleEditMode}
            style={{ marginRight: "0.9rem", cursor: "pointer" }}
          />
        )}
        {!isAnswered && <Icon name="incomplete" width={32} height={32} />}
        {isAnswered && <Icon name="complete" width={32} height={32} />}
      </IconBox>
    </Wrapper>
  );
}
