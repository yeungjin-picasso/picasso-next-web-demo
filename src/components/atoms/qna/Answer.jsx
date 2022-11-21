import Icon from "@atoms/Icon";
import styled from "styled-components";

const AnswerBox = styled.div`
  margin-top: 0.6rem;
  display: flex;
`;

const IconBox = styled.div`
  width: 10rem;
`;

const Text = styled.div`
  margin-top: 0.1rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.dimGray};
  letter-spacing: 1px;
  line-height: 1.7rem;
`;

export default function Answer({ answer }) {
  return (
    <AnswerBox>
      <IconBox>
        <Icon name="reply" width={24} height={24} />
      </IconBox>
      <Text>{answer}</Text>
    </AnswerBox>
  );
}
