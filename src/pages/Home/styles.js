import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.strong};
  align-items: center;
  padding: 0 20px;
`;

export const Main = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto -50px;
  background: ${props => props.theme.light};
`;

export const Content = styled.div`
  padding: 55px;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`;

export const CardContent = styled.div`
  background: ${props => props.theme.secondary};
  padding: 5px;
  width: 300px;
  height: 180px;
  margin-top: 10px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
`;
