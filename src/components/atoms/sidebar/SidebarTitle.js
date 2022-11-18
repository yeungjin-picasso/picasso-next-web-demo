import styled from "styled-components";

const Title = styled.h1`
  font-family: "Over the Rainbow", curve;
  font-size: 2.5rem;
  padding-left: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.lumber};
  margin-bottom: 1.8rem;
  overflow: hidden;
`;

const Hidden = styled.span`
  color: ${({ isHover, theme: { colors } }) =>
    isHover ? colors.lagunaBeach : colors.darkLiver};
  transition: color 0.7s ease-in-out;
`;

export default function SidebarTitle({ isHover }) {
  return (
    <Title>
      <span>P</span>
      <Hidden isHover={isHover}>icasso</Hidden>
    </Title>
  );
}
