import AskForm from "@molecules/QuesForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { qnaListAtom } from "src/states";
import { useRecoilValue } from "recoil";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const qnaList = useRecoilValue(qnaListAtom);
  const [pageIndex, setPageIndex] = useState(1);

  // 전체 게시물 개수
  const totalPosts = useMemo(() => qnaList.length, [qnaList]);

  return (
    <>
      <AskForm />
      <QnaList posts={qnaList} pageIndex={pageIndex} PAGE_PER={PAGE_PER} />
      <Pagination
        PAGE_PER={PAGE_PER}
        totalPosts={totalPosts}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </>
  );
}
