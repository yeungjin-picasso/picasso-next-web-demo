import CloseBtn from "@atoms/community/modal/CloseBtn";
import ModalBtn from "@atoms/community/modal/ModalBtn";
import ModalInput from "@atoms/community/modal/ModalInput";
import ModalTextarea from "@atoms/community/modal/ModalTextarea";
import ModalTitle from "@atoms/community/modal/ModalTitle";
import Modal from "@templates/Modal";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function PostCreateForm({ setShowForm }) {
  const [postInfo, setPostInfo] = useState({ title: "", content: "" });
  const { title, content } = postInfo;

  const onChange = ({ target: { name, value } }) => {
    setPostInfo({ ...postInfo, [name]: value });
    console.log(postInfo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <Form onSubmit={onSubmit}>
        <ModalTitle title="Create Post" />
        <CloseBtn onClick={() => setShowForm(false)} />
        <ModalInput
          name="title"
          placeholder="Caption for your post"
          onChange={onChange}
        />
        <ModalTextarea
          name="content"
          placeholder="Content for your post"
          onChange={onChange}
        />
        <ModalBtn
          name="Publish"
          disabled={title.length === 0 || content.length === 0}
        />
      </Form>
    </Modal>
  );
}
