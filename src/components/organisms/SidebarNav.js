import SidebarLink from "@molecules/SidebarLink";
import styled from "styled-components";

export default function SidebarNav({ isHover }) {
  const props = [
    { content: "Home", url: "/", iconName: "home" },
    { content: "Generate NFT Art", url: "/generate", iconName: "brush" },
    { content: "NFT Art Showcase", url: "/showcase", iconName: "picture" },
    { content: "Community", url: "/community", iconName: "community" },
    { content: "QnA", url: "/qna", iconName: "help" },
  ];

  return (
    <div>
      {props.map((item, index) => {
        return (
          <SidebarLink
            key={index}
            content={item.content}
            url={item.url}
            iconName={item.iconName}
            isHover={isHover}
          />
        );
      })}
    </div>
  );
}
