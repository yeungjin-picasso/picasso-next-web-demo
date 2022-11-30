import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  margin-left: 0.7rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.09),
      0 0.5px 1px rgba(0, 0, 0, 0.18);
  }
`;

export default function CancelCommentBtn({
  comment,
  setEditText,
  setEditMode,
}) {
  const onClick = () => {
    setEditText(comment);
    setEditMode(false);
  };
  return (
    <Button onClick={onClick}>
      <Icon name="back" width="28" height="28" />
    </Button>
  );
}
