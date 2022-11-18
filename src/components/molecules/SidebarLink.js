import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "@atoms/Icon";
import { useState } from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  height: calc(20px + 2rem);
  background-color: ${({ isClicked, theme: { colors } }) =>
    isClicked ? colors.falcon : colors.darkLiver};
  position: relative;

  &:hover {
    cursor: pointer;
    a {
      color: ${({ theme }) => theme.colors.lumber};
    }
  }
`;

const IconBox = styled.div`
  position: absolute;
  padding: 1rem 0;
`;

const Text = styled.a`
  font-family: "Over the Rainbow", cursive;
  color: ${({ isClicked, theme: { colors } }) =>
    isClicked ? colors.lumber : colors.squirrel};
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  left: calc(24px + 2rem);
`;

export default function SidebarLink({ content, url = "", iconName, isHover }) {
  const pathname = useRouter().pathname;
  const [elementHover, setElementHover] = useState(false);
  const isClicked = pathname === url;

  return (
    <Link Link href={url} passHref legacyBehavior>
      <Box
        isClicked={isClicked}
        onMouseEnter={() => setElementHover(true)}
        onMouseLeave={() => setElementHover(false)}
      >
        <IconBox>
          <Icon
            name={isClicked || elementHover ? iconName : `disabled/${iconName}`}
            width={24}
            height={20}
          />
        </IconBox>
        <Text
          style={{
            width: isHover ? "12rem" : 0,
            transition: " width 0.7s ease-in-out",
          }}
          isClicked={isClicked}
        >
          {content}
        </Text>
      </Box>
    </Link>
  );
}
