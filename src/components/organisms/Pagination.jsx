import NextPrevBtn from "@atoms/pagination/NextPrevBtn";
import PageNum from "@atoms/pagination/PageNum";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

// 페이지 그룹 크기
const PAGE_GROUP_SIZE = 5;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export default function Pagination({ PAGE_PER, totalPosts, page }) {
  const [groupIndex, setGroupIndex] = useState(0);
  const router = useRouter();

  // 전체 페이지 수
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

  // 그룹당 페이지 배열
  const pageArr = useMemo(
    () =>
      Array.from({ length: totalGroups }, (_, idx) =>
        pages.slice(
          idx * PAGE_GROUP_SIZE,
          idx * PAGE_GROUP_SIZE + PAGE_GROUP_SIZE,
        ),
      ),
    [pages, totalGroups],
  );

  useEffect(() => {
    setGroupIndex(Math.floor((page - 1) / PAGE_GROUP_SIZE));
  }, [page]);

  return (
    <PageBox>
      <NextPrevBtn
        name="prev"
        onClick={() => {
          if (groupIndex !== 0) {
            setGroupIndex((prev) => prev - 1);
            router.replace(
              `/community/?page=${(groupIndex - 1) * PAGE_GROUP_SIZE + 1}`,
            );
          }
        }}
        disabled={groupIndex === 0}
      />
      {pageArr.length > 0 &&
        pageArr[groupIndex] &&
        pageArr[groupIndex].map((num) => <PageNum number={num} key={num} />)}
      <NextPrevBtn
        name="next"
        onClick={() => {
          if (groupIndex !== pageArr.length - 1) {
            setGroupIndex((prev) => prev + 1);
            router.replace(
              `/community/?page=${(groupIndex + 1) * PAGE_GROUP_SIZE + 1}`,
            );
          }
        }}
        disabled={groupIndex === pageArr.length - 1}
      />
    </PageBox>
  );
}
