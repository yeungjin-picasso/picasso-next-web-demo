import AggregatedData from "@molecules/community/detail/AggregatedData";
import PostContent from "@atoms/community/detail/PostContent";
import PostMeta from "@atoms/community/detail/PostMeta";
import PostTitle from "@atoms/community/detail/PostTitle";
import PostBtnGroup from "@molecules/community/detail/PostBtnGroup";
import styled from "styled-components";
import PostBtn from "@atoms/community/detail/PostBtn";
import { userAtom } from "src/states";
import { useRecoilValue } from "recoil";
import { Router, useRouter } from "next/router";

const Post = styled.div`
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.veryLightGrey};
`;

export default function DetailPost({ post }) {
  const {
    communities_num,
    title,
    writer,
    content,
    created_at,
    views,
    reply_count,
  } = post;
  const userName = useRecoilValue(userAtom)?.nickname;
  const router = useRouter();
  return (
    <Post>
      <div className="flex justify-between items-start">
        <PostTitle title={title} />
        {userName === writer && (
          <PostBtnGroup id={communities_num} title={title} content={content} />
        )}
      </div>
      <PostMeta writer={writer} createdAt={created_at} />
      <PostContent content={content} />
      <div className="flex justify-between items-end">
        <AggregatedData viewCount={views} replyCount={reply_count} />
        <PostBtn
          iconName="back"
          btnName="back"
          onClick={() => router.push("/community")}
        />
      </div>
    </Post>
  );
}
