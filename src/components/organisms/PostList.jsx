import Post from "@molecules/community/Post";
import { useEffect, useState } from "react";

export default function PostList({
  data,
  pageIndex,
  PAGE_PER,
  isSortTopViews,
}) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_PER);

  useEffect(() => {
    setStart((pageIndex - 1) * PAGE_PER);
    setEnd(pageIndex * PAGE_PER);
  }, [pageIndex]);

  return (
    <>
      {data.slice(start, end).map((post, i) => (
        <Post
          key={post.idx}
          post={post}
          index={i}
          isSortTopViews={isSortTopViews}
        />
      ))}
    </>
  );
}
