import styled from "styled-components";
import HomeHeader from "@organisms/HomeHeader";
import Image from "next/image";
import TryButton from "@atoms/home/TryButton";

const Layout = styled.div`
  padding: 4vh 5vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeBody = styled.div`
  position: relative;
  height: 76vh;
  width: 100%;
`;

export default function HomeTemplate() {
  return (
    <Layout>
      <HomeHeader />
      <HomeBody>
        <Image src="/assets/images/main.png" alt="" fill />
        <TryButton />
      </HomeBody>
    </Layout>
  );
}
