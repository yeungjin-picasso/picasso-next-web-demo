import styled from "styled-components";

const Info = styled.span`
  color: ${({ theme }) => theme.colors.novel};
  font-size: 0.8rem;

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
