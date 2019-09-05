import styled from 'styled-components';

export const Sidebar = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  background: ${props => props.theme[props.color] || props.theme.light};
  transition: 0.6s;
`;

export const ToggleBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 250px;
  cursor: pointer;

  span {
    width: 35px;
    height: 4px;
    background: ${props => props.theme[props.color] || props.theme.strong};
    display: block;
    margin-top: 4px;
  }
  &: hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ItemMenu = styled.div`
  color: ${props => props.theme.primary};
  list-style: none;
  padding: 15px;
  font-size: 14px;
`;
