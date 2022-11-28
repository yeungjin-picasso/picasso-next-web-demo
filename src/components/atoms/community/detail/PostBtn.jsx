import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin-left: 0.4rem;
`;

export default function PostBtn({ iconName, btnName }) {
  return (
    <Button>
      <Icon name={iconName} width="32" height="32" />
      <Text>{btnName}</Text>
    </Button>
  );
}
