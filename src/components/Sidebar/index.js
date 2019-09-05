import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar, ToggleBtn, ItemMenu } from './styles';

const SideBar = () => {
  const [leftValue, setLeft] = useState(-240);
  const sideBarMenuMessages = useSelector(state => state.messages.sideBar);

  function handleSidebar(e) {
    e.preventDefault();
    if (leftValue === -240) {
      setLeft(0);
    } else {
      setLeft(-240);
    }
  }

  return (
    <Sidebar onClick={handleSidebar} style={{ left: leftValue }}>
      <Fragment>
        <ToggleBtn>
          <span />
          <span />
          <span />
        </ToggleBtn>
        <ul>
          <ItemMenu>
            <li>{sideBarMenuMessages.menuSideBarHome}</li>
          </ItemMenu>
          <ItemMenu>
            <li>{sideBarMenuMessages.menuSideBarStudents}</li>
          </ItemMenu>
          <ItemMenu>
            <li>{sideBarMenuMessages.menuSideBarSubjects}</li>
          </ItemMenu>
          <ItemMenu>
            <li>{sideBarMenuMessages.menuSideBarClasses}</li>
          </ItemMenu>
          <ItemMenu>
            <li>{sideBarMenuMessages.menuSideBarSetup}</li>
          </ItemMenu>
        </ul>
      </Fragment>
    </Sidebar>
  );
};

export default SideBar;
