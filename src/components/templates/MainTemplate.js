import styled from "styled-components";
import MainHeader from "@organisms/MainHeader";
import Image from "next/image";
import TryButton from "@atoms/TryButton";

const MainLayout = styled.div`
  padding: 4vh 5vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainBody = styled.div`
  position: relative;
  height: 76vh;
  width: 100%;
`;

export default function MainTemplate() {
  return (
    <MainLayout>
      <MainHeader />
      <MainBody>
        <Image src="/assets/images/main.png" alt="" fill />
        <TryButton />
      </MainBody>
    </MainLayout>
  );
}
