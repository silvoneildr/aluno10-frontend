import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${props => props.theme.light};
  padding: 20px;
  border-radius: 10px;
`;

export default Container;
