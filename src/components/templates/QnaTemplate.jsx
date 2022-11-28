import QuesForm from "@molecules/qna/QuesForm";
import SearchForm from "@molecules/SearchForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { QNA_LIST } from "src/api/mock/QNA_LIST";
import { useQuery } from "@tanstack/react-query";
import { getAllQnaPostsFn } from "src/api/qnaApi";
import TriggerBtnGroup from "@molecules/TriggerBtnGroup";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const [pageIndex, setPageIndex] = useState(1);
  const [formSelector, setFormSelector] = useState(false);

  // const { data } = useQuery("getAllQnaPostsFn", getAllQnaPostsFn);
  const data = QNA_LIST;
  const totalPosts = useMemo(() => data.length, [data]); // 전체 게시물 개수

  const arr = useMemo(() => {
    return [
      {
        iconName: "search",
        fn: () => setFormSelector(true),
        trigger: formSelector,
      },
      {
        iconName: "write",
        fn: () => setFormSelector(false),
        trigger: !formSelector,
      },
    ];
  }, [formSelector]);

  return (
    <>
      <TriggerBtnGroup arr={arr} />
      {!formSelector && <QuesForm />}
      {formSelector && <SearchForm />}
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
