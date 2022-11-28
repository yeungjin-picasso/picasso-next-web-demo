import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconBox = styled.div`
  padding: 0.6rem;
  background-color: white;
  margin-left: 0.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
`;

export default function CommentBtnGroup() {
  return (
    <Group>
      <IconBox>
        <Icon name="edit" width="28" height="28" />
      </IconBox>
      <IconBox>
        <Icon name="trash" width="28" height="28" />
      </IconBox>
    </Group>
  );
}
