import Modal from "@templates/Modal";
import styled from "styled-components";

const Form = styled.form`
  background-color: blue;
`;
export default function PostCreateForm({ setShowForm }) {
  return (
    <Modal>
      <Form></Form>
    </Modal>
  );
}
