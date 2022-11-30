import ListElemBox from "@atoms/list/ListElemBox";
import ListId from "@atoms/list/ListId";
import PostIconBox from "./PostIconBox";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import ListTitle from "@atoms/list/ListTitle";
import { useRouter } from "next/router";

export default function Post({ post, index, isSortTopViews }) {
  const { communities_num, writer, title, created_at, views, reply_count } =
    post;
  const router = useRouter();
  const onClick = () => {
    router.push({ pathname: `/community/${communities_num}` });
  };
  return (
    <ListElemBox>
      <ListId
        id={communities_num}
        index={index}
        isSortTopViews={isSortTopViews}
      />
      <div className="grow mt-2 pb-7">
        <ListWriteInfo writer={writer} createdAt={created_at} />
        <ListTitle onClick={onClick} title={title} />
      </div>
      <PostIconBox viewCount={views} replyCount={reply_count} />
    </ListElemBox>
  );
}
