import SearchForm from "@molecules/SearchForm";
import PostList from "@organisms/PostList";
import { useMemo, useState } from "react";
import { COMMUNITY_LIST } from "src/api/mock/COMMUNITTY_LIST";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function CommunityTemplate() {
  const [pageIndex, setPageIndex] = useState(1);

  const data = COMMUNITY_LIST;
  const totalPosts = useMemo(() => data.length, [data]); // 전체 게시물 개수

  return (
    <>
      <SearchForm />
      <PostList data={data} pageIndex={pageIndex} PAGE_PER={PAGE_PER} />
    </>
  );
}
