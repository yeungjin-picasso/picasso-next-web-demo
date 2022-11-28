import styled from "styled-components";

const Content = styled.div`
  font-family: "Merriweather", serif;
  font-size: 1.5rem;
  line-height: 2.4rem;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.dimGray};
`;

export default function PostContent({ content }) {
  return <Content>{content}</Content>;
}
