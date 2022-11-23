import styled from "styled-components";

const Title = styled.div`
  margin-top: 0.4rem;
  font-size: 1.6rem;

  span {
    height: 1.6rem;
    overflow: hidden;
    word-wrap: brek-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
  }
`;

const Private = styled.div`
  color: ${({ theme }) => theme.colors.sunsetOrange};
`;

export default function ListTitle({ isPrivate, title, answer }) {
  return (
    <Title>
      {isPrivate && <Private>[private]</Private>}
      {!isPrivate && <span>{title}</span>}
    </Title>
  );
}
