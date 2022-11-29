import PostBtn from "@atoms/community/detail/PostBtn";
import styled from "styled-components";

const Group = styled.div`
  display: flex;

  button {
    margin-right: 0.6rem;
  }
  button:last-child {
    margin-right: 0;
  }
`;

export default function PostBtnGroup() {
  return (
    <Group>
      <PostBtn iconName="edit" />
      <PostBtn iconName="trash" />
    </Group>
  );
}
