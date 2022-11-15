import styled from "styled-components";
import MainHeader from "@organisms/MainHeader";

const MainLayout = styled.div`
  padding: 3rem 4rem;
  width: 100vw;
  height: 100vh;
`;

export default function MainTemplate() {
  return (
    <MainLayout>
      <MainHeader />
    </MainLayout>
  );
}
