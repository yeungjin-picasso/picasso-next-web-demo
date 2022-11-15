import styled from "styled-components";
import TitleLogo from "@atoms/TitleLogo";
import NavBar from "@molecules/NavBar";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function MainHeader() {
  return (
    <Header>
      <TitleLogo />
      <NavBar />
    </Header>
  );
}
