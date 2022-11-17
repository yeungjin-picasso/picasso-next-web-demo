import styled from "styled-components";
import NavLink from "@atoms/NavLink";
import { useState } from "react";
import Icon from "@atoms/Icon";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(true);
  const elements = ["SHOWCASE", "QNA", "COMMUNITIES", "LOGIN", "REGISTER"];
  return (
    <Nav>
      {!isLogin &&
        elements.map((name, index) => {
          return <NavLink key={index} name={name} />;
        })}
      {isLogin && (
        <>
          {elements.slice(0, 3).map((name, index) => {
            return <NavLink key={index} name={name} />;
          })}
          <Icon className="ml-[2.5vw]" name="user" width={30} height={30} />
        </>
      )}
    </Nav>
  );
}
