import { memo } from "react";
import styled from "styled-components";

const Input = styled.input`
  flex-grow: 1;
  font-size: 1.3rem;
  margin: 0 1.2rem 0 0.6rem;
  line-height: 1.7rem;
  letter-spacing: 1px;

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

function ListInput({ placeholder, value = "", onChange, rest }) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default memo(ListInput);
