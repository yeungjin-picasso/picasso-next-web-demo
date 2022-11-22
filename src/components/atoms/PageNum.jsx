import styled from "styled-components";

const Num = styled.a`
  font-size: 1.7rem;
  padding: 1rem 1.6rem;
  border-radius: 3rem;
  line-height: 1.8rem;
  margin: 0 0.5rem;
  margin-bottom: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.cultured};
  }
`;

export default function PageNum({ number, onClick }) {
  console.log(number);
  return <Num onClick={onClick}>{number}</Num>;
}
