import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 0.8rem;
  }
`;

const Text = styled.span`
  font-size: 1.4rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.novel};
`;

export default function AggregatedData({ viewCount, replyCount }) {
  return (
    <Container>
      <Icon name="comment" width="28" height="28" />
      <Text>{replyCount}</Text>
      <Icon name="eye" width="34" height="34" />
      <Text>{viewCount}</Text>
    </Container>
  );
}
