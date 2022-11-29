import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3.5rem;
  padding: 0.7rem;
  height: 3.5rem;
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

export default function PostBtn({ iconName, btnName = "" }) {
  return (
    <Button>
      <Icon name={iconName} width="28" height="28" />
      {btnName && <Text>{btnName}</Text>}
    </Button>
  );
}
