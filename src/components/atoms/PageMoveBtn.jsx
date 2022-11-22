import styled from "styled-components";
import Icon from "./Icon";

const IconBox = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  margin: 0 0.5rem;
  margin-bottom: 1.4rem;
`;

export default function PageMoveBtn({ name, onClick, disabled }) {
  return (
    <IconBox onClick={onClick}>
      <Icon
        name={disabled ? `disabled/${name}` : name}
        width={32}
        height={32}
      />
    </IconBox>
  );
}
