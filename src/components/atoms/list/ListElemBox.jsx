import styled from "styled-components";

const Element = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  width: calc(52vw - 4rem);
  margin-bottom: 1.4rem;
  border-radius: 2rem;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.tutu};
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.16);
  }
`;

export default function ListElemBox({ children, onClick }) {
  return <Element onClick={onClick}>{children}</Element>;
}
