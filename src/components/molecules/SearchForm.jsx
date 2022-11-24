import Icon from "@atoms/common/Icon";
import ListForm from "@atoms/list/ListForm";
import ListInputBox from "@atoms/list/ListInputBox";

export default function SearchForm() {
  return (
    <ListForm>
      <ListInputBox>
        <Icon name="search" />
      </ListInputBox>
    </ListForm>
  );
}
