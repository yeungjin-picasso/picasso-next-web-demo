import PostBtn from "@atoms/community/detail/PostBtn";
import PostEditForm from "@organisms/PostEditForm";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteCommPostFn } from "src/api/communityApi";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  width: calc(4rem + 56px);

  button {
    margin-right: 0.8rem;
  }
  button:last-child {
    margin-right: 0;
  }
`;

export default function PostBtnGroup({ id, title, content }) {
  const data = { id: id, title: title, content: content };
  const { mutate } = useMutation("deleteCommPostFn", deleteCommPostFn, {
    onSuccess: () => {
      // getCommPostFn 라는 unique key에 대한 기존 데이터를 무효화하고 다시 가져오기
      queryClient.invalidateQuries("getCommPostFn");
    },
  });
  const [editMode, setEditMode] = useState(false);

  const deletePost = () => {
    mutate(id);
  };

  return (
    <Group>
      <PostBtn iconName="edit" onClick={() => setEditMode(true)} />
      <PostBtn iconName="trash" onClick={deletePost} />
      {editMode && <PostEditForm data={data} setEditMode={setEditMode} />}
    </Group>
  );
}
