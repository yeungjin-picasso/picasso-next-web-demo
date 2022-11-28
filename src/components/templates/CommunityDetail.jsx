import DetailPost from "@organisms/DetailPost";
import PostComment from "@organisms/PostComment";
import { useQuery } from "@tanstack/react-query";
import { getCommPostFn } from "src/api/commApi";
import { COMMENT_LIST } from "src/api/mock/COMMENT_LIST";
import { COMMUNITY_LIST } from "src/api/mock/COMMUNITTY_LIST";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.veryLightGrey};
  border-radius: 1rem;
  padding: 2rem;
`;

export default function CommunityDetail({ id }) {
  let posts = COMMUNITY_LIST.find((v) => Number(id) === v.id);
  posts = posts
    ? posts
    : {
        title: "",
        writer: "",
        content: "",
        createdAt: "",
        viewCount: "",
        replyCount: "",
      };
  let comments = COMMENT_LIST.slice(0, posts.replyCount);
  console.log(comments);
  comments.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  console.log(comments);
  // const { data: posts } = useQuery("getCommPostFn", (id) => getCommPostFn(id));
  return (
    <Container>
      <DetailPost posts={posts} />
      <PostComment comments={comments} />
    </Container>
  );
}
