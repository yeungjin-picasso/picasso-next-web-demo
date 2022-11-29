import styled from "styled-components";

const Textarea = styled.textarea`
  font-size: 1.5rem;
  border-radius: 1rem;
  width: 100%;
  height: 8rem;
  margin-top: 0.8rem;
  resize: none;
  padding: 1rem 1.2rem;
  line-height: 2rem;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.18);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &:focus {
    outline: none;
  }
`;
export default function CommentEditForm({ editText, setEditText }) {
  const onChange = (e) => {
    setEditText(e.target.value);
  };
  return (
    <form>
      <Textarea onChange={onChange} value={editText} />
    </form>
  );
}
