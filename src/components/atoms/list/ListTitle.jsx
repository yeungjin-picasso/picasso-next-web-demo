import styled from "styled-components";

const Title = styled.div`
  margin-top: 0.7rem;
  font-size: 1.6rem;
  display: flex;

  span {
    height: 1.8rem;
    overflow: hidden;
    word-wrap: brek-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
  }
`;

const Private = styled.div`
  color: ${({ theme }) => theme.colors.sunsetOrange};
  margin-right: 1rem;
`;

const PostTitle = styled.span`
  color: ${({ isPrivate, isWriter, theme }) =>
    isPrivate && isWriter ? theme.colors.novel : "black"};
`;

export default function ListTitle({
  isPrivate = false,
  isWriter = false,
  title,
}) {
  return (
    <Title>
      {isPrivate && <Private>[private]</Private>}
      {(!isPrivate || isWriter) && (
        <PostTitle isPrivate={isPrivate} isWriter={isWriter}>
          {title}
        </PostTitle>
      )}
    </Title>
  );
}
