import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  position: fixed;
  width: 36%;
  height: 70%;
  top: 15%;
  left: 32%;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: white;
`;

export default function Modal({ children }) {
  return (
    <Container>
      <StyledModal>{children}</StyledModal>
    </Container>
  );
}
