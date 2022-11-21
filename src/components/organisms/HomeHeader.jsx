import styled from "styled-components";
import TitleLogo from "@atoms/home/TitleLogo";
import HeaderNav from "@molecules/HeaderNav";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

export default function HomeHeader() {
  return (
    <Header>
      <TitleLogo />
      <HeaderNav />
    </Header>
  );
}
