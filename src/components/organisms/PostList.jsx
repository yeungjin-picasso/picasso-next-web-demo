import Post from "@molecules/community/Post";
import { useEffect, useState } from "react";

export default function PostList({ data, PAGE_PER, isSortTopViews, page }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_PER);

  useEffect(() => {
    setStart((page - 1) * PAGE_PER);
    setEnd(page * PAGE_PER);
  }, [page]);

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
