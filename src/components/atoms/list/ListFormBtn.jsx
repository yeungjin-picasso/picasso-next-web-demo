import { memo } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 2.4rem;
  border-radius: 0 2rem 2rem 0;
  width: 6.5rem;
  margin-right: 0.6rem;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.09),
      0 0.5px 1px rgba(0, 0, 0, 0.18);
  }
`;

function ListFormBtn({ name }) {
  return <Button>{name}</Button>;
}

export default memo(ListFormBtn);
