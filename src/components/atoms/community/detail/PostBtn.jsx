import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1.6rem + 28px);
  padding: 0.8rem;
  border-radius: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.09),
      0 0.5px 1px rgba(0, 0, 0, 0.18);
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin-left: 0.4rem;
`;

export default function PostBtn({ iconName, btnName = "", onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon name={iconName} width="28" height="28" />
      {btnName && <Text>{btnName}</Text>}
    </Button>
  );
}
