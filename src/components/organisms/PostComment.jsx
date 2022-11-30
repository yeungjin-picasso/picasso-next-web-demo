import styled from "styled-components";
import CommentList from "./CommentList";

const Container = styled.div``;

export default function PostComment({ comments }) {
  return (
    <Container>
      <CommentList comments={comments} />
    </Container>
  );
}
