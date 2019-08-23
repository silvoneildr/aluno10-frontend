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
  background: ${props => props.theme.secondary};
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
  flex-direction: column;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
  align-items: stretch;
`;

export const CardGroup = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 20%;
  transition: order 0.3s easeout;
`;

export const Card = styled.div`
  background: ${props => props.theme.primary};
  padding: 20px;
  width: 370px;
  height: 180px;
  margin-top: 10px;
  line-height: 150px;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  color: ${props => props.theme.secondary};
  font-family: sans-serif;
  h2 p {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-around;
`;
