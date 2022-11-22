import Icon from "@atoms/common/Icon";
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

export default function QuesIconBox({ isWriter, isAnswered, setIsEditMode }) {
  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <Wrapper>
      <IconBox>
        {!isAnswered && (
          <>
            {isWriter && (
              <Icon
                name="edit"
                width={32}
                height={32}
                onClick={handleEdit}
                style={{ marginRight: "0.8rem" }}
              />
            )}
            <Icon name="incomplete" width={32} height={32} />
          </>
        )}
        {isAnswered && <Icon name="complete" width={32} height={32} />}
      </IconBox>
    </Wrapper>
  );
}
