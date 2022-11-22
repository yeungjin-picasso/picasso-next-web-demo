import styled from "styled-components";

const Id = styled.div`
  font-size: 1.6rem;
  margin-top: 1.9rem;
`;

export default function ListId({ id }) {
  return <Id>{id}.</Id>;
}
