import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.strong};
  align-items: center;
  padding: 0 20px;
`;

export default Container;
