import { memo } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  font-size: 1.1rem;
  width: 100%;
  border-radius: 2rem;
  height: 8rem;
  margin-top: 1rem;
  resize: none;
  padding: 0.9rem 1.4rem 0.9rem 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);

  &:focus {
    outline: none;
  }
`;

function QuesTextArea({ desc = "", setQuesInfo }) {
  const handleChange = (e) => {
    setQuesInfo((prev) => ({ ...prev, description: e.target.value }));
  };
  return (
    <TextArea
      placeholder="Enter a question description"
      onChange={handleChange}
      value={desc}
    ></TextArea>
  );
}

export default memo(QuesTextArea);
