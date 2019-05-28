import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme[props.color] || props.theme.primary};
  margin: 5px 0;
`;

export default Span;
