import DetailPost from "@organisms/DetailPost";
import PostComment from "@organisms/PostComment";
import { useQuery } from "@tanstack/react-query";
import { getCommPostFn } from "src/api/commApi";
import { COMMUNITY_LIST } from "src/api/mock/COMMUNITTY_LIST";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.veryLightGrey};
  border-radius: 1rem;
  padding: 2rem;
`;

export default function CommunityDetail({ id }) {
  let data = COMMUNITY_LIST.find((v) => Number(id) === v.id);
  data = data
    ? data
    : {
        title: "",
        writer: "",
        content: "",
        createdAt: "",
        viewCount: "",
        replyCount: "",
      };
  const { title, writer, content, createdAt, viewCount, replyCount } = data;
  // const { data } = useQuery("getCommPostFn", (id) => getCommPostFn(id));
  return (
    <Container>
      <DetailPost data={data} />
      <PostComment />
    </Container>
  );
}
