import CommentContent from "@atoms/community/detail/CommentContent";
import CommentCreatedAt from "@atoms/community/detail/CommentCreatedAt";
import CommentWriter from "@atoms/community/detail/CommentWriter";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/states";
import styled from "styled-components";
import CommentBtnGroup from "./CommentBtnGroup";

const Container = styled.div`
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.colors.cultured};
  color: ${({ theme }) => theme.colors.dimGray};
  padding: 1.2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
`;

export default function Comment({
  comment: { id, writer, comment, createdAt },
}) {
  const userName = useRecoilValue(userAtom)?.nickname;
  return (
    <Container>
      <CommentWriter writer={writer} />
      <CommentContent comment={comment} />
      <div className="flex justify-between items-end">
        <CommentCreatedAt createdAt={createdAt} />
        {userName === writer && <CommentBtnGroup />}
      </div>
    </Container>
  );
}
