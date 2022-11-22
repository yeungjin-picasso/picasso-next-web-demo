import ListElement from "@molecules/ListElement";
import { useEffect, useState } from "react";

export default function QnaList({ posts, pageIndex, PAGE_PER }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_PER);

  useEffect(() => {
    setStart((pageIndex - 1) * PAGE_PER);
    setEnd(pageIndex * PAGE_PER);
  }, [pageIndex]);

  return (
    <>
      {posts.slice(start, end).map((qna) => (
        <ListElement key={qna.id} qna={qna} />
      ))}
    </>
  );
}
