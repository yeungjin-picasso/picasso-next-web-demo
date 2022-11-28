import CommentForm from "@molecules/community/detail/CommentForm";
import styled from "styled-components";
import CommentList from "./CommentList";

const Container = styled.div``;

export default function PostComment({ comments }) {
  return (
    <Container>
      <CommentForm />
      <CommentList comments={comments} />
    </Container>
  );
}
