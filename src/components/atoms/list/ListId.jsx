import styled from "styled-components";

const Index = styled.div`
  font-size: 1.6rem;
  padding-right: 1rem;
  margin-top: 1.9rem;

  span {
    color: ${({ theme }) => theme.colors.sunsetOrange};
  }
`;

export default function ListId({ id, index, isSortTopViews }) {
  return (
    <Index>{isSortTopViews && index < 3 ? <span>Top.</span> : `${id}.`}</Index>
  );
}
