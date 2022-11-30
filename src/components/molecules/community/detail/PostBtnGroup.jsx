import PostBtn from "@atoms/community/detail/PostBtn";
import PostEditForm from "@organisms/PostEditForm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteCommPostFn } from "src/api/communityApi";
import { queryClient } from "src/pages/_app";
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
  const data = { id, title, content };
  const router = useRouter();
  const { mutate } = useMutation(["deleteCommPostFn"], deleteCommPostFn);
  const [editMode, setEditMode] = useState(false);

  const deletePost = () => {
    mutate(id);
    router.push({ pathname: `/community` });
  };

  return (
    <Group>
      <PostBtn iconName="edit" onClick={() => setEditMode(true)} />
      <PostBtn iconName="trash" onClick={deletePost} />
      {editMode && <PostEditForm data={data} setEditMode={setEditMode} />}
    </Group>
  );
}
