import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  color: white;
  border: none;

  height: ${props => props.height || '50px'};

  ${props =>
    props.color &&
    css`
      background: ${props.theme[props.color] || props.theme.primary};
    `}
`;

export default StyleButton;
