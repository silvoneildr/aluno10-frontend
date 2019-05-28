import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  height: ${props => props.height || '50px'};
  border-radius: 4px;

  ${props =>
    props.color &&
    css`
      background: ${props.theme[props.color] || props.theme.primary};
    `}
`;

export default StyleButton;
