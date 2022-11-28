import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  font-family: "Open Sans", sans-serif;
  font-size: 2.5rem;
  top: 0rem;
  right: 0rem;
  color: ${({ theme }) => theme.colors.veryLightGrey};
`;

export default function CloseBtn({ onClick }) {
  return <Button onClick={onClick}>x</Button>;
}
