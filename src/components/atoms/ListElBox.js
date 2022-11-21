const { default: styled } = require("styled-components");

const Element = styled.div`
  display: flex;
  overflow: hidden;
  width: calc(52vw - 4rem);
  margin-bottom: 1.4rem;
  border-radius: 2.5rem;
  padding: 0 2rem 1.7rem 2rem;
  background: ${({ theme }) => theme.colors.cultured};

  &:hover {
    background: ${({ theme }) => theme.colors.tutu};
  }
`;

export default function ListElBox({ children, onClick }) {
  return <Element onClick={onClick}>{children}</Element>;
}
