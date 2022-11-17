import Link from "next/link";
import styled from "styled-components";

const LinkName = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 2.5vw;

  &:last-child {
    padding-right: 0;
  }
`;

export default function NavLink({ name }) {
  const url = "/" + name.toLowerCase();

  return (
    <Link href={url} passHref legacyBehavior>
      <LinkName>{name}</LinkName>
    </Link>
  );
}
