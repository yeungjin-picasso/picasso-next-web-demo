import Icon from "@atoms/common/Icon";
import styled from "styled-components";

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

export default function CommentBtn({ iconName, onClick }) {
  return (
    <IconBox onClick={onClick}>
      <Icon name={iconName} width="28" height="28" />
    </IconBox>
  );
}
