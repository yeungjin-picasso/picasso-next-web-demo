import styled from "styled-components";

const Title = styled.div`
  margin-top: 0.7rem;
  padding: 0 1.2rem;
  font-size: 1.6rem;
  height: 1.8rem;
  display: flex;
  overflow: hidden;
`;

const Private = styled.div`
  color: ${({ theme }) => theme.colors.sunsetOrange};
  margin-right: 1rem;
`;

const PostTitle = styled.div`
  color: ${({ isNovelColor, theme }) =>
    isNovelColor ? theme.colors.novel : "black"};
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.1rem;

  &:hover {
    font-weight: bold;
  }
`;

export default function ListTitle({
  isPrivate = false,
  isWriter = false,
  isAdmin = false,
  title,
  onClick = null,
}) {
  return (
    <Title>
      {isPrivate && <Private>[private]</Private>}
      {(!isPrivate || isWriter || isAdmin) && (
        <PostTitle
          onClick={onClick}
          isNovelColor={isPrivate && (isWriter || isAdmin)}
        >
          {title}
        </PostTitle>
      )}
    </Title>
  );
}
