import ListElemBox from "@atoms/list/ListElemBox";
import Listidx from "@atoms/list/ListIdx";
import PostIconBox from "./PostIconBox";
import ListWriteInfo from "@atoms/list/ListWriteInfo";
import ListTitle from "@atoms/list/ListTitle";

export default function Post({
  post: { idx, writer, title, createdAt, viewCount, replyCount },
  index,
  isSortTopViews,
}) {
  return (
    <ListElemBox>
      <Listidx idx={idx} index={index} isSortTopViews={isSortTopViews} />
      <div className="grow mt-2 pb-7">
        <ListWriteInfo writer={writer} createdAt={createdAt} />
        <ListTitle title={title} />
      </div>
      <PostIconBox viewCount={viewCount} replyCount={replyCount} />
    </ListElemBox>
  );
}
