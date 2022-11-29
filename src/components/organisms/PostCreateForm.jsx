import CloseBtn from "@atoms/community/modal/CloseBtn";
import ModalBtn from "@atoms/community/modal/ModalBtn";
import ModalInput from "@atoms/community/modal/ModalInput";
import ModalTextarea from "@atoms/community/modal/ModalTextarea";
import ModalTitle from "@atoms/community/modal/ModalTitle";
import { useMutation } from "@tanstack/react-query";
import Modal from "@templates/Modal";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { createCommPostFn } from "src/api/communityApi";
import { userAtom } from "src/states";
import styled from "styled-components";

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function PostCreateForm({ setShowForm }) {
  const userName = useRecoilValue(userAtom)?.nickname;
  const { mutate } = useMutation("createCommPostFn", createCommPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      QueryClient.invalidateQuries("getAllCommPostsFn");
    },
  });
  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
    writer: userName,
  });
  const { title, content } = postInfo;

  const onChange = ({ target: { name, value } }) => {
    setPostInfo({ ...postInfo, [name]: value });
    console.log(postInfo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(postInfo);
    setShowForm(false);
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
