import AggregatedData from "@molecules/community/detail/AggregatedData";
import PostContent from "@atoms/community/detail/PostContent";
import PostMeta from "@atoms/community/detail/PostMeta";
import PostTitle from "@atoms/community/detail/PostTitle";
import PostBtnGroup from "@molecules/community/detail/PostBtnGroup";
import styled from "styled-components";
import PostBtn from "@atoms/community/detail/PostBtn";

const Post = styled.div`
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.veryLightGrey};
`;

export default function DetailPost({
  posts: { title, writer, content, createdAt, viewCount, replyCount },
}) {
  return (
    <Post>
      <div className="flex justify-between items-start">
        <PostTitle title={title} />
        <PostBtnGroup />
      </div>
      <PostMeta writer={writer} createdAt={createdAt} />
      <PostContent content={content} />
      <div className="flex justify-between items-end">
        <AggregatedData viewCount={viewCount} replyCount={replyCount} />
        <PostBtn iconName="back" btnName="back" />
      </div>
    </Post>
  );
}