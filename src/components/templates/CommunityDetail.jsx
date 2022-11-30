import CommentForm from "@molecules/community/detail/CommentForm";
import CommentList from "@organisms/CommentList";
import DetailPost from "@organisms/DetailPost";
import { useQuery } from "@tanstack/react-query";
import { getAllCommentsFn } from "src/api/commentApi";
import { getCommPostFn } from "src/api/communityApi";
import { COMMENT_LIST } from "src/api/mock/COMMENT_LIST";
import { COMMUNITY_LIST } from "src/api/mock/COMMUNITTY_LIST";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.veryLightGrey};
  border-radius: 1rem;
  padding: 2rem;
`;

export default function CommunityDetail({ id }) {
  // let post = COMMUNITY_LIST.find((v) => Number(id) === v.id);
  // post = post
  //   ? post
  //   : {
  //       title: "",
  //       writer: "",
  //       content: "",
  //       createdAt: "",
  //       viewCount: "",
  //       replyCount: "",
  //     };
  // let comments = COMMENT_LIST.slice(0, post.replyCount);
  // comments.sort((a, b) => {
  //   return new Date(b.createdAt) - new Date(a.createdAt);
  // });

  const { data: post } = useQuery(["getCommPostFn", id], getCommPostFn);
  const { data: comments } = useQuery(
    ["getAllCommentsFn", id],
    getAllCommentsFn,
  );

  return (
    <Container>
      {post && <DetailPost post={post[0]} />}
      <CommentForm post_id={id} />
      {comments && <CommentList comments={comments} />}
    </Container>
  );
}
