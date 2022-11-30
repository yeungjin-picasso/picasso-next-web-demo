import Link from "next/link";
import styled from "styled-components";

const Element = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 2.5vw;
`;

export default function HomeLink({ name }) {
  const url = "/" + name.toLowerCase();

  return (
    <Link href={url} passHref legacyBehavior>
      <Element>{name}</Element>
    </Link>
  );
}
