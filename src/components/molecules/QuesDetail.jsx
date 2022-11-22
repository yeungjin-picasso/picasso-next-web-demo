import Answer from "@atoms/qna/Answer";
import Description from "@atoms/qna/Description";

export default function QuesDetail({ answer, desc }) {
  return (
    <>
      <Description desc={desc} />
      <Answer answer={answer} />
    </>
  );
}
