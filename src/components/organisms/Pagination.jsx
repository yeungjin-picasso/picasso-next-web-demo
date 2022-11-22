import PageMoveBtn from "@atoms/PageMoveBtn";
import PageNum from "@atoms/PageNum";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

// 페이지 그룹 크기
const PAGE_GROUP_SIZE = 5;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Pagination({
  PAGE_PER,
  totalPosts,
  pageIndex,
  setPageIndex,
}) {
  const [groupIndex, setGroupIndex] = useState(0);

  // 한 페이지에 10개의 게시물씩 전체 페이지 개수
  const totalPages = useMemo(
    () => Math.ceil(totalPosts / PAGE_PER),
    [totalPosts],
  );

  // pages에 모든 페이지를 저장
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, idx) => idx + 1),
    [totalPages],
  );

  // 전체 페이지 그룹 수
  const totalGroups = useMemo(
    () => Math.floor(pages.length / PAGE_GROUP_SIZE + 1),
    [pages],
  );

  // 10페이지씩 나누어서 pageArr에 저장
  const pageArr = useMemo(
    () =>
      Array.from(
        {
          length: totalGroups,
        },
        (_, idx) => pages.slice(idx, idx + PAGE_GROUP_SIZE),
      ),
    [pages, totalGroups],
  );

  useEffect(() => {
    setGroupIndex(Math.floor((pageIndex - 1) / PAGE_GROUP_SIZE));
  }, [pageIndex]);

  return (
    <PageBox>
      <PageMoveBtn
        name="prev"
        onClick={() => {
          if (groupIndex !== 0) {
            setGroupIndex((prev) => prev - 1);
          }
        }}
        disabled={groupIndex === 0}
      />
      {pageArr.length > 0 &&
        pageArr[groupIndex] &&
        pageArr[groupIndex].map((num) => (
          <PageNum number={num} key={num} onClick={() => setPageIndex(num)} />
        ))}
      <PageMoveBtn
        name="next"
        onClick={() => {
          if (groupIndex !== pageArr.length - 1) {
            setGroupIndex((prev) => prev + 1);
          }
        }}
        disabled={groupIndex === pageArr.length - 1}
      />
    </PageBox>
  );
}
