import QuesForm from "@molecules/qna/QuesForm";
import SearchForm from "@molecules/SearchForm";
import Pagination from "@organisms/Pagination";
import QnaList from "@organisms/QnaList";
import { useMemo, useState } from "react";
import { QNA_LIST } from "src/api/mock/QNA_LIST";
import { useQuery } from "@tanstack/react-query";
import { getAllQnaPostsFn } from "src/api/qnaApi";
import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 6.8rem;
  right: 2rem;

  div:last-child {
    margin-left: 0.8rem;
  }
`;

const IconBox = styled.div`
  background-color: ${({ theme, formSelector }) => {
    if (formSelector) {
      return theme.colors.tutu;
    }
    return theme.colors.cultured;
  }};
  padding: 0.8rem;
  border-radius: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tutu};
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.16);
  }
`;

// 페이지 당 보여줄 게시물 수
const PAGE_PER = 12;

export default function QnaTemplate() {
  const [pageIndex, setPageIndex] = useState(1);
  const [formSelector, setFormSelector] = useState(false);

  // const { data } = useQuery("getAllQnaPostsFn", getAllQnaPostsFn);
  const data = QNA_LIST;
  const totalPosts = useMemo(() => data.length, [data]); // 전체 게시물 개수

  const handleForm = () => {
    setFormSelector((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <IconBox onClick={handleForm} formSelector={!formSelector}>
          <Icon name="write" width={32} height={32} />
        </IconBox>
        <IconBox onClick={handleForm} formSelector={formSelector}>
          <Icon name="search" width={32} height={32} />
        </IconBox>
      </Wrapper>
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
