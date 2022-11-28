import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.darkLiver};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  resize: none;

  &:focus {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.18), 0 0 6px rgba(0, 0, 0, 0.18);
    outline: none;
  }
`;

export default function ModalTextarea({ name, placeholder, onChange }) {
  return <Textarea name={name} placeholder={placeholder} onChange={onChange} />;
}
