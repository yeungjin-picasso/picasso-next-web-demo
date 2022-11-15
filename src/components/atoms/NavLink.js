import Link from "next/link";
import styled from "styled-components";

const LinkName = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: bold;
`;

export default function NavLink({ name }) {
  const url = "/" + name.toLowerCase();

  return (
    <Link href={url} passHref legacyBehavior>
      <LinkName>{name}</LinkName>
    </Link>
  );
}
