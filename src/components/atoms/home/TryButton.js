import Link from "next/link";
import styled from "styled-components";

const Element = styled.a`
  color: ${(props) => props.theme.colors.lumber};
  background-color: ${(props) => props.theme.colors.darkLiver};
  border-radius: 2rem;
  position: absolute;
  right: 0;
  bottom: 0;
  font-family: "Over the Rainbow", cursive;
  font-weight: bold;
`;

export default function TryButton() {
  return (
    <Link href="/showcase" passHref legacyBehavior>
      <Element className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        Try it for free
      </Element>
    </Link>
  );
}
