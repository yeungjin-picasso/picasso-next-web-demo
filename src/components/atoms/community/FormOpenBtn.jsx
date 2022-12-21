import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const IconBox = styled.button`
  border-radius: 1.5rem;
  position: absolute;
  top: 5.6rem;
  right: 11rem;
  height: 3.6rem;
  width: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.09), 0 4px 1px rgba(0, 0, 0, 0.18);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.09), 0 1px 0 rgba(0, 0, 0, 0.18);
  }
`;

export default function FormOpenBtn({ fn }) {
  return (
    <IconBox type="button" onClick={fn}>
      <Icon name="write" width={28} height={28} />
    </IconBox>
  );
}
