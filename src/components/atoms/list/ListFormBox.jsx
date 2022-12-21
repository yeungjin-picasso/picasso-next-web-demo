import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 1.7rem;
  border-radius: 2rem;
  padding: 1.2rem 1.7rem;
  background: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

export default function ListFormBox({ children, onSubmit }) {
  return <Form onSubmit={onSubmit}>{children}</Form>;
}
