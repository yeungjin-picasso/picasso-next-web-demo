import ListElemBox from "@atoms/list/ListElemBox";
import ListId from "@atoms/list/ListId";
import PostIconBox from "./PostIconBox";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import ListTitle from "@atoms/list/ListTitle";
import { useRouter } from "next/router";

export default function Post({
  post: { id, writer, title, createdAt, viewCount, replyCount },
  index,
  isSortTopViews,
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/community/?id=${id}`);
  };
  return (
    <ListElemBox>
      <ListId id={id} index={index} isSortTopViews={isSortTopViews} />
      <div className="grow mt-2 pb-7">
        <ListWriteInfo writer={writer} createdAt={createdAt} />
        <ListTitle onClick={onClick} title={title} />
      </div>
      <PostIconBox viewCount={viewCount} replyCount={replyCount} />
    </ListElemBox>
  );
}
