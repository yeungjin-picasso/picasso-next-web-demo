import styled from "styled-components";
import HeaderLink from "@atoms/home/HeaderLink";
import { useState } from "react";
import Icon from "@atoms/Icon";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function HeaderNav() {
  const [isLogin, setIsLogin] = useState(true);
  const elements = ["SHOWCASE", "QNA", "COMMUNITY", "LOGIN", "REGISTER"];
  return (
    <Nav>
      {!isLogin &&
        elements.map((name) => {
          return <HeaderLink key={name} name={name} />;
        })}
      {isLogin && (
        <>
          {elements.slice(0, 3).map((name) => {
            return <HeaderLink key={name} name={name} />;
          })}
          <Icon className="ml-[2.5vw]" name="user" width={30} height={30} />
        </>
      )}
    </Nav>
  );
}
