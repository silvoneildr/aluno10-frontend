import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.strong};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  input:last-of-type {
    margin-top: 10px;
  }

  button {
    margin-top: 10px;
  }
`;

export default Container;
