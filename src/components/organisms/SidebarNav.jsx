import SidebarLink from "@molecules/SidebarLink";

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
      {props.map((item) => {
        return <SidebarLink key={item.content} {...item} isHover={isHover} />;
      })}
    </div>
  );
}
