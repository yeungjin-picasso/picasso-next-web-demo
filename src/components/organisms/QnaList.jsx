import Question from "@molecules/Question";
import { useEffect, useState } from "react";

export default function QnaList({ data, pageIndex, PAGE_PER }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_PER);

  useEffect(() => {
    setStart((pageIndex - 1) * PAGE_PER);
    setEnd(pageIndex * PAGE_PER);
  }, [pageIndex]);

  return (
    <>
      {data.slice(start, end).map((qna) => (
        <Question key={qna.idx} qna={qna} />
      ))}
    </>
  );
}
