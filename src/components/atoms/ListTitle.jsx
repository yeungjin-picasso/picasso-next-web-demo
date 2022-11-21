import styled from "styled-components";

const Title = styled.div`
  margin-top: 0.4rem;
  font-size: 1.6rem;
  flex-grow: 1;
`;

const Private = styled.div`
  color: ${({ theme }) => theme.colors.sunsetOrange};
`;

const PostTitle = styled.div`
  flex-grow: 1;
`;

export default function ListTitle({ isPrivate, title, answer }) {
  return (
    <Title>
      {isPrivate && <Private>[private]</Private>}
      {!isPrivate && <PostTitle>{title}</PostTitle>}
    </Title>
  );
}
