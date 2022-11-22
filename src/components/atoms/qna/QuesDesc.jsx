import styled from "styled-components";

const Desc = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  color: ${({ theme }) => theme.colors.dimGray};
  letter-spacing: 1px;
  line-height: 1.7rem;
`;

export default function QuesDesc({ desc }) {
  return <Desc>{desc}</Desc>;
}
