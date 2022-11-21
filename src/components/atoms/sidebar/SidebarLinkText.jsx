import styled from "styled-components";

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

export default function SidebarLinkText({ isClicked, isHover, content }) {
  return (
    <Text
      style={{
        width: isHover ? "12rem" : 0,
        transition: " width 0.7s ease-in-out",
      }}
      isClicked={isClicked}
    >
      {content}
    </Text>
  );
}
