import QuesForm from "@molecules/QuesForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { getQnaList } from "src/states";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const posts = useRecoilValue(getQnaList);

  const [pageIndex, setPageIndex] = useState(1);

  // 전체 게시물 개수
  const totalPosts = useMemo(() => posts.length, [posts]);

  return (
    <>
      <QuesForm />
      <QnaList posts={posts} pageIndex={pageIndex} PAGE_PER={PAGE_PER} />
      <Pagination
        PAGE_PER={PAGE_PER}
        totalPosts={totalPosts}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </>
  );
}
