import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const IconBox = styled.div`
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default function NextPrevBtn({ name, onClick, disabled }) {
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
