import AskForm from "@molecules/AskForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { QNA_LIST } from "src/api/QNA_LIST";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const [pageIndex, setPageIndex] = useState(1);

  // 전체 게시물 개수
  const totalPosts = useMemo(() => QNA_LIST.length, []);

  return (
    <>
      <AskForm />
      <QnaList posts={QNA_LIST} pageIndex={pageIndex} PAGE_PER={PAGE_PER} />
      <Pagination
        PAGE_PER={PAGE_PER}
        totalPosts={totalPosts}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </>
  );
}
