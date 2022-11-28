import FormOpenBtn from "@atoms/community/FormOpenBtn";
import SearchForm from "@molecules/SearchForm";
import TriggerBtnGroup from "@molecules/TriggerBtnGroup";
import Pagination from "@organisms/Pagination";
import PostCreateForm from "@organisms/PostCreateForm";
import PostList from "@organisms/PostList";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCommPostsFn } from "src/api/commApi";
import { COMMUNITY_LIST } from "src/api/mock/COMMUNITTY_LIST";

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;
const data = COMMUNITY_LIST;

export default function CommunityTemplate() {
  const [showForm, setShowForm] = useState(true);
  const [isSortTopViews, setIsSortTopViews] = useState(false);
  const query = useRouter().query;
  const { page } = query.page ? query : { page: 1 };
  // const { data } = useQuery("getAllCommPostsFn", getAllCommPostsFn);
  const totalPosts = data.length; // 전체 게시물 개수

  const sortTopViews = useCallback(() => {
    data.sort((a, b) => {
      return b.viewCount - a.viewCount;
    });
    setIsSortTopViews(true);
  }, []);

  const sortRecent = useCallback(() => {
    data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setIsSortTopViews(false);
  }, []);

  const arr = useMemo(
    () => [
      { iconName: "recent", fn: sortRecent, trigger: !isSortTopViews },
      { iconName: "star", fn: sortTopViews, trigger: isSortTopViews },
    ],
    [sortTopViews, sortRecent, isSortTopViews],
  );

  return (
    <>
      <TriggerBtnGroup arr={arr} />
      <FormOpenBtn fn={() => setShowForm(true)} />
      {showForm && <PostCreateForm setShowForm={setShowForm} />}
      <SearchForm />
      <PostList
        data={data}
        PAGE_PER={PAGE_PER}
        isSortTopViews={isSortTopViews}
        page={page}
      />
      <Pagination PAGE_PER={PAGE_PER} totalPosts={totalPosts} page={page} />
    </>
  );
}
