import CommentForm from "@molecules/community/detail/CommentForm";
import styled from "styled-components";
import CommentList from "./CommentList";

const Container = styled.div``;

export default function PostComment({ post_id, comments }) {
  return (
    <Container>
      <CommentForm post_id={post_id} />
      <CommentList comments={comments} />
    </Container>
  );
}
