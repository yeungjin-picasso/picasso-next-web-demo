import Icon from "@atoms/Icon";
import styled from "styled-components";

const AnswerBox = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 18fr;
`;

const IconBox = styled.div`
  position: relative;
`;

const Text = styled.div`
  padding-top: 0.4rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.7rem;
  margin-bottom: 1rem;
`;

export default function Answer({ answer }) {
  return (
    <AnswerBox>
      <IconBox>
        <Icon name="reply" width={32} height={32} />
      </IconBox>
      <Text>{answer}</Text>
    </AnswerBox>
  );
}
