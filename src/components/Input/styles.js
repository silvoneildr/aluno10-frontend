import styled, { css } from 'styled-components';
import { ErrorStyle } from 'Root/styles/global';

const Input = styled.input`
  border-radius: 3px;
  border: 1px;
  height: 50px;
  padding: 0 15px;

  ${props =>
    props.hasError &&
    css`
      ${ErrorStyle}
    `}
`;
export default Input;
