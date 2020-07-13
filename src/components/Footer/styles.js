import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 50px;
  background: #333;
  color: #fff;
  padding: 0 4%;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: red;
    font-size: 20px;
  }

  a {
    color: #fff;
    transition: color 0.4s ease-in;

    &:hover {
      color: #11bb99;
    }
  }
`;
