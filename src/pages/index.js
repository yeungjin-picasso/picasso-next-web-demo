import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Details>
        <h2 className="Home">Hello</h2>
        <p className="text-gray-500 font-normal mt-1">This works!!</p>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Details = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
