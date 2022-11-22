import ListFormBtn from "@atoms/list/ListFormBtn";
import QuesInput from "@atoms/qna/QuesInput";
import QuesTextArea from "@atoms/qna/QuesTextArea";
import PvtChkBox from "@atoms/qna/PvtChkBox";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: calc(52vw - 4rem);
  margin-bottom: 1.4rem;
  border-radius: 2rem;
  padding: 1.2rem 1.7rem;
  background: ${({ theme }) => theme.colors.cultured};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

const InputBox = styled.div`
  overflow: hidden;
  width: calc(52vw - 7.4rem);
  height: 3.4rem;
  border-radius: 2.5rem;
  padding: 0 0.6rem;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
`;

export default function QuesForm() {
  const [quesInfo, setQuesInfo] = useState({
    isPrivate: true,
    question: "",
    description: "",
  });

  const handleSubmit = (e) => {
    // question 데이터 전송 코드 작성해야함
    e.preventDefault();
    console.log(quesInfo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <PvtChkBox setQuesInfo={setQuesInfo} />
        <QuesInput setQuesInfo={setQuesInfo} />
        <ListFormBtn name="Ask" />
      </InputBox>
      {quesInfo.question.length > 0 && (
        <QuesTextArea setQuesInfo={setQuesInfo} />
      )}
    </Form>
  );
}
