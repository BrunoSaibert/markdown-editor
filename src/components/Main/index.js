import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 70px - 50px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > * {
    flex: 1;

    overflow-y: auto;
    height: inherit;
  }
`;

export default Main;
