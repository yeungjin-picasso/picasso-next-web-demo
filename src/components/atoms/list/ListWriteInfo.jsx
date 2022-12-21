import styled from "styled-components";

const Info = styled.span`
  color: ${({ theme }) => theme.colors.novel};
  font-size: 0.8rem;
  overflow: hidden;
  margin-top: 0.3rem;
  margin-left: 1.2rem;
  height: 0.8rem;
  word-wrap: brek-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;

  span {
    color: black;
  }
`;

export default function ListWriteInfo({ writer, createdAt }) {
  return (
    <Info>
      <span>{writer}</span> asked • {createdAt}
    </Info>
  );
}
