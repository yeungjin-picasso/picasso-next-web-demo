import Answer from "@atoms/qna/Answer";
import QuesDesc from "@atoms/qna/QuesDesc";

export default function QuesDetail({ answer, desc }) {
  return (
    <>
      <QuesDesc desc={desc} />
      <Answer answer={answer} />
    </>
  );
}
