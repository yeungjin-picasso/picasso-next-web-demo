import Question from "@molecules/qna/Question";
import { useEffect, useState } from "react";

export default function QnaList({ data, page, PAGE_PER }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_PER);

  useEffect(() => {
    setStart((page - 1) * PAGE_PER);
    setEnd(page * PAGE_PER);
  }, [page]);
  return (
    <>
      {data?.slice(start, end).map((qna) => (
        <Question key={qna.idx} qna={qna} />
      ))}
    </>
  );
}
