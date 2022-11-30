import styled from "styled-components";
import HeaderLink from "@atoms/home/HeaderLink";
import { useState } from "react";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 2.5vw;
`;

export default function HeaderNav() {
  const [isLogin, setIsLogin] = useState(false);
  const elements = ["SHOWCASE", "QNA", "COMMUNITY"];
  return (
    <Nav>
      {elements.map((name) => {
        return <HeaderLink key={name} name={name} />;
      })}
      {/* {!isLogin && <Button onClick={}>LOGIN</Button>}
      {isLogin && <Button onClick={}>LOGOUT</Button>} */}
    </Nav>
  );
}
