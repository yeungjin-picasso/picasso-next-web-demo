import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const AnswerBox = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 22fr;
`;

const IconBox = styled.div`
  position: relative;
`;

const TextTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const Text = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.7rem;
`;

const Textarea = styled.textarea``;

export default function Answer({ answer, isAdmin }) {
  return (
    <AnswerBox>
      <IconBox>
        <Icon name="reply" width={30} height={30} />
      </IconBox>
      <div className="mt-2 ml-2">
        <TextTitle>Answer</TextTitle>
        {!isAdmin && <Text>{answer}</Text>}
        {isAdmin && <Textarea />}
      </div>
    </AnswerBox>
  );
}
