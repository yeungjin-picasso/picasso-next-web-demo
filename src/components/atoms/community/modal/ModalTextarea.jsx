import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.darkLiver};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  resize: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  &:focus {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.18), 0 0 6px rgba(0, 0, 0, 0.18);
    outline: none;
  }
`;

export default function ModalTextarea({ name, placeholder, onChange, value }) {
  return (
    <Textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
