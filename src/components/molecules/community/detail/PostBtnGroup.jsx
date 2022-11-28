import PostBtn from "@atoms/community/detail/PostBtn";
import styled from "styled-components";

const Group = styled.div`
  display: flex;

  button:first-child {
    margin-right: 1rem;
  }
`;

export default function PostBtnGroup() {
  return (
    <Group>
      <PostBtn iconName="edit" btnName="Edit" style={{ marginRight: "1rem" }} />
      <PostBtn iconName="back" btnName="Back" />
    </Group>
  );
}
