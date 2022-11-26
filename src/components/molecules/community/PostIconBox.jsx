import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  align-items: center;
  right: 2rem;
`;

const Text = styled.span`
  font-size: 1.4rem;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.colors.novel};
`;

export default function PostIconBox({ viewCount, replyCount }) {
  return (
    <Container>
      <Icon name="comment" width="28" height="28" />
      <Text style={{ marginRight: "0.7rem" }}>{replyCount}</Text>
      <Icon name="eye" width="34" height="34" />
      <Text>{viewCount}</Text>
    </Container>
  );
}
