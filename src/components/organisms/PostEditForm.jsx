import CloseBtn from "@atoms/community/modal/CloseBtn";
import ModalBtn from "@atoms/community/modal/ModalBtn";
import ModalInput from "@atoms/community/modal/ModalInput";
import ModalTextarea from "@atoms/community/modal/ModalTextarea";
import ModalTitle from "@atoms/community/modal/ModalTitle";
import { useMutation } from "@tanstack/react-query";
import Modal from "@templates/Modal";
import { useState } from "react";
import { updateCommPostFn } from "src/api/communityApi";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import styled from "styled-components";
import { queryClient } from "src/pages/_app";

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function PostEditForm({ data, setEditMode }) {
  const userName = useRecoilValue(userAtom)?.nickname;
  const { mutate } = useMutation(["updateCommPostFn"], updateCommPostFn, {
    onSuccess: () => {
      // getAllQnaPostsFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQueries("getCommPostFn");
    },
  });
  const [editInfo, setEditInfo] = useState({
    title: data.title,
    content: data.content,
    writer: userName,
  });
  const { title, content } = editInfo;

  const onChange = ({ target: { name, value } }) => {
    setEditInfo({ ...editInfo, [name]: value });
  };

  const handleClose = () => {
    setEditMode(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ id: data.id, data: editInfo });
    setEditMode(false);
  };

  return (
    <Modal>
      <Form onSubmit={onSubmit}>
        <ModalTitle title="Edit Post" />
        <CloseBtn onClick={handleClose} />
        <ModalInput
          name="title"
          placeholder="Caption for your post"
          onChange={onChange}
          value={title}
        />
        <ModalTextarea
          name="content"
          placeholder="Content for your post"
          onChange={onChange}
          value={content}
        />
        <ModalBtn
          name="Update"
          disabled={title.length === 0 || content.length === 0}
        />
      </Form>
    </Modal>
  );
}
