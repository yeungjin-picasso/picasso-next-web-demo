import styled from "styled-components";

const Meta = styled.div`
  font-size: 1.2rem;
  font-family: "Merriweather", serif;
  padding: 1.2rem 0;
  text-align: end;
  color: ${({ theme }) => theme.colors.novel};

  span {
    font-family: inherit;
    color: black;
    font-weight: bold;
  }
`;

export default function PostMeta({ writer, createdAt }) {
  return (
    <Meta>
      posted by <span>{writer}</span> • {createdAt}
    </Meta>
  );
}
