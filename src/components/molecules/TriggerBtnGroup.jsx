import Icon from "@atoms/common/Icon";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  position: absolute;
  top: 6rem;
  right: 2rem;

  div {
    margin-right: 0.9rem;
  }

  div:last-child {
    margin-right: 0;
  }
`;

const IconBox = styled.div`
  background-color: ${({ theme, trigger }) => trigger && theme.colors.cultured};
  padding: 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid whitesmoke;
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.09), 0 4px 1px rgba(0, 0, 0, 0.18);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.09), 0 1px 0 rgba(0, 0, 0, 0.18);
  }
`;

export default function TriggerBtnGroup({ arr }) {
  return (
    <Group>
      {arr.map((v, i) => {
        return (
          <IconBox onClick={v.fn} key={i} trigger={v.trigger}>
            <Icon name={v.iconName} width={28} height={28} />
          </IconBox>
        );
      })}
    </Group>
  );
}
