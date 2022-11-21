import { memo } from "react";
import styled from "styled-components";

const Input = styled.input`
  flex-grow: 1;
  font-size: 1.1rem;
  margin: 0rem 1.2rem;
  padding: 0.2rem 0;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  }
`;

function AskInput({ setQuestionInfo }) {
  const handleChange = (e) => {
    setQuestionInfo((prev) => ({ ...prev, question: e.target.value }));
  };
  return <Input placeholder="Ask a question" onChange={handleChange} />;
}

export default memo(AskInput);
