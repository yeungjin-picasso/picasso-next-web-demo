import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "@atoms/common/Icon";
import { useState } from "react";
import SidebarLinkText from "@atoms/sidebar/SidebarLinkText";

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
        <SidebarLinkText
          isClicked={isClicked}
          content={content}
          isHover={isHover}
        />
      </Box>
    </Link>
  );
}
