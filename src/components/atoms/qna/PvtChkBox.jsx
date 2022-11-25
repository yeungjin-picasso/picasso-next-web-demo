import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.3rem 1.2rem 0.3rem 1.8rem;
  margin-right: 0.6rem;
  border-right: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ChkBox = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.15em;
  border: 0.1em solid ${({ theme }) => theme.colors.sunsetOrange};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.sunsetOrange};
    position: relative;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.sunsetOrange};
  }

  &:checked::before {
    content: "\u2714";
    font-size: 1.1em;
    color: #fff;
    position: absolute;
    top: 0px;
    left: 1px;
  }
`;

const Text = styled.span`
  margin-left: 0.8rem;
  font-size: 1.3rem;
`;

function PvtChkBox({ isPrivate = true, setQuesInfo }) {
  const handleChange = () => {
    setQuesInfo((prev) => ({ ...prev, isPrivate: !prev.isPrivate }));
  };
  return (
    <Wrapper>
      <Label htmlFor="private">
        <ChkBox
          type="checkbox"
          id="private"
          defaultChecked={isPrivate}
          onChange={handleChange}
        />
        <Text>private</Text>
      </Label>
    </Wrapper>
  );
}

export default memo(PvtChkBox);
