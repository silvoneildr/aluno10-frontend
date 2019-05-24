import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '50px'};
  color: white;
  border-radius: 4px;

  ${props =>
    props.color &&
    css`
      background: ${props.theme[props.color] || props.theme.primary};
    `}
`;

export default StyleButton;
