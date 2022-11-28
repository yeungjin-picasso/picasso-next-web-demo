import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const IconBox = styled.div`
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  margin-bottom: 1.4rem;

  &:hover {
    cursor: pointer;
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
