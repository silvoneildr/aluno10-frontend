import styled, { css } from 'styled-components';
import { ErrorStyle } from 'Root/styles/global';

const Input = styled.input`
  ${props =>
    props.hasError &&
    css`
      ${ErrorStyle}
    `}
`;
export default Input;
