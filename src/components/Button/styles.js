import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '50px'};
  background: ${props => props.theme.primary};
  color: white;

  ${props =>
    props.color &&
    css`
      background: props.theme[props.color] || props.theme.primary;
    `}
`;

export default StyleButton;
