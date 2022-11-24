import styled from "styled-components";

const Index = styled.div`
  font-size: 1.6rem;
  margin-top: 1.9rem;
`;

export default function Listidx({ idx }) {
  return <Index>{idx}.</Index>;
}
