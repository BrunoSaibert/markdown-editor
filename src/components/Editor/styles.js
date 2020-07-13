import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 16px;
  resize: none;
  background: transparent;
  border: 0;
  font-size: 16px;
  line-height: 26px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #eee;
  padding: 16px;

  span.success {
    color: #11bb99;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    padding: 0 20px;
    margin: 0 8px;
    background: #11bb99;
    color: #fff;
    border-radius: 4px;
    border: 0;
    transition: background 0.4s ease-in;

    &:hover {
      background: #0e977c;
    }

    span {
      margin-right: 8px;
    }
  }
`;
