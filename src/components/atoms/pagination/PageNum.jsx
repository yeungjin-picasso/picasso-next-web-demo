import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Num = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  margin-bottom: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.cultured};
    cursor: pointer;
  }
`;

export default function PageNum({ number }) {
  const { page } = useRouter().query;
  return (
    <Link href={`community/?page=${number}`}>
      <Num
        style={{
          backgroundColor: Number(page) === number ? "#CECDCD" : "",
        }}
      >
        {number}
      </Num>
    </Link>
  );
}
