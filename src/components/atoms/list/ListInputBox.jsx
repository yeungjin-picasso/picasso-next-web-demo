import styled from "styled-components";

const InputBox = styled.div`
  overflow: hidden;
  height: 4rem;
  border-radius: 2.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

export default function ListInputBox({ children }) {
  return <InputBox>{children}</InputBox>;
}
