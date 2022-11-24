import Icon from "@atoms/common/Icon";
import { useResetRecoilState } from "recoil";
import { getQnaList } from "src/states";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 2rem;
`;

const IconBox = styled.div`
  position: relative;
  display: flex;
  height: 32px;
`;

export default function QuesIconBox({ isWriter, isAnswered, setEditMode }) {
  const setPosts = useResetRecoilState(getQnaList);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const deleteItem = async () => {
    await mainRequest.delete("/qna/delete", quesInfo);
    setPosts();
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
            style={{ marginRight: "0.9rem" }}
          />
        )}
        {isWriter && !isAnswered && (
          <Icon
            name="edit"
            width={32}
            height={32}
            onClick={handleEditMode}
            style={{ marginRight: "0.9rem" }}
          />
        )}
        {!isAnswered && <Icon name="incomplete" width={32} height={32} />}
        {isAnswered && <Icon name="complete" width={32} height={32} />}
      </IconBox>
    </Wrapper>
  );
}
