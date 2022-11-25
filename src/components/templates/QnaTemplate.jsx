import QuesForm from "@molecules/qna/QuesForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { QNA_LIST } from "src/api/mock/QNA_LIST";
import { useQuery } from "@tanstack/react-query";
import { getAllQnaPostsFn } from "src/api/qnaApi";
import SearchForm from "@molecules/SearchForm";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const [pageIndex, setPageIndex] = useState(1);

  // const { data } = useQuery("getAllQnaPostsFn", getAllQnaPostsFn);
  const data = QNA_LIST;
  const totalPosts = useMemo(() => data.length, [data]); // 전체 게시물 개수

  return (
    <>
      <QuesForm />
      <QnaList data={data} pageIndex={pageIndex} PAGE_PER={PAGE_PER} />
      <Pagination
        PAGE_PER={PAGE_PER}
        totalPosts={totalPosts}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </>
  );
}
