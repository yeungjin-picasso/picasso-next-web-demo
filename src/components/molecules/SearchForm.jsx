import Icon from "@atoms/common/Icon";
import ListForm from "@atoms/list/ListFormBox";
import ListFormBtn from "@atoms/list/ListFormBtn";
import ListInputBox from "@atoms/list/ListInputBox";
import ListInput from "@atoms/list/ListInput";
import { useState } from "react";

export default function SearchForm() {
  const [keywords, setKeywords] = useState("");

  const handleChange = (e) => {
    setKeywords(e.target.value);
  };

  return (
    <ListForm>
      <ListInputBox>
        <Icon
          name="disabled/search"
          width={28}
          height={28}
          style={{ marginLeft: "1.8rem" }}
        />
        <ListInput
          placeholder="Search Posts"
          value={keywords}
          onChange={handleChange}
        />
        <ListFormBtn name="Search" />
      </ListInputBox>
    </ListForm>
  );
}
