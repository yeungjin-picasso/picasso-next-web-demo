import PageTitle from "@atoms/PageTitle";
import styled from "styled-components";

const Container = styled.div`
  width: 52vw;
  height: 100vh;
  margin: 0 auto;
  padding: 2.7rem 2rem;
`;

export default function PageLayout({ children, title }) {
  return (
    <Container>
      <PageTitle title={title} />
      {children}
    </Container>
  );
}
