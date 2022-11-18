import { useState } from "react";
import styled from "styled-components";
import SidebarTitle from "../atoms/sidebar/SidebarTitle";
import SidebarNav from "../organisms/SidebarNav";

const Bar = styled.div`
  width: fit-content;
  height: 100vh;
  padding: 3rem 0.8rem;
  background-color: ${(props) => props.theme.colors.darkLiver};
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  transition: width 0.7s ease-in-out;
`;

export default function Sidebar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Bar
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ width: isHover ? "16.5rem" : "calc(3.6rem + 24px)" }}
    >
      <SidebarTitle isHover={isHover} />
      <SidebarNav isHover={isHover} />
    </Bar>
  );
}
