import styled from "styled-components";
import ListElement from "@molecules/ListElement";
import { QNA_LIST } from "src/api/QNA_LIST";

const List = styled.div``;

export default function QnaList() {
  return (
    <List>
      {QNA_LIST.map((qna) => (
        <ListElement key={qna.id} qna={qna} />
      ))}
    </List>
  );
}
