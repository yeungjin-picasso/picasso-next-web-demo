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
  const [isLogin, setIsLogin] = useState(false);
  const elements = ["SHOWCASE", "COMMUNITIES", "QNA", "LOGIN", "REGISTER"];
  return (
    <Nav className={isLogin ? "w-2/5" : "w-1/2"}>
      {!isLogin &&
        elements.map((name, index) => {
          return <NavLink key={index} name={name} />;
        })}
      {isLogin && (
        <>
          {elements.slice(0, 3).map((name, index) => {
            return <NavLink key={index} name={name} />;
          })}
          <Icon name="user" width={40} height={40} />
        </>
      )}
    </Nav>
  );
}
