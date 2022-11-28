import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 3.6rem;
  border: 1px solid ${({ theme }) => theme.colors.darkLiver};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.18), 0 0 6px rgba(0, 0, 0, 0.18);
  }
`;

export default function ModalInput({ name, placeholder, onChange }) {
  return <Input name={name} placeholder={placeholder} onChange={onChange} />;
}
