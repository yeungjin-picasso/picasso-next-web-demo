import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.cultured : theme.colors.darkLiver};
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Merriweather", serif;
  letter-spacing: 1px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.veryLightGrey : theme.colors.lumber};
`;

export default function ModalBtn({ name, disabled }) {
  return <Button disabled={disabled}>{name}</Button>;
}
