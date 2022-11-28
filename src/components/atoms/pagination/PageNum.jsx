import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Num = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.cultured};
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.16);
  }
`;

export default function PageNum({ number }) {
  const { page } = useRouter().query;
  return (
    <Link href={`community/?page=${number}`}>
      <Num
        style={{
          backgroundColor: Number(page) === number ? "#CECDCD" : "#ffffff",
        }}
      >
        {number}
      </Num>
    </Link>
  );
}
