import Comment from "@molecules/community/detail/Comment";

export default function CommentList({ comments }) {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
}
