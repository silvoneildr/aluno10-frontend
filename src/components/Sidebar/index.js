import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar, ToggleBtn } from './styles';

const SideBar = () => {
  const [leftValue, setLeft] = useState(-300);
  const sideBarMenuMessages = useSelector(state => state.messages.sideBar);

  function handleSidebar(e) {
    e.preventDefault();
    if (leftValue === -300) {
      setLeft(0);
    } else {
      setLeft(-300);
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
          <li>{sideBarMenuMessages.menuSideBarHome}</li>
          <li>{sideBarMenuMessages.menuSideBarStudents}</li>
          <li>{sideBarMenuMessages.menuSideBarSubjects}</li>
          <li>{sideBarMenuMessages.menuSideBarClasses}</li>
          <li>{sideBarMenuMessages.menuSideBarSetup}</li>
        </ul>
      </Fragment>
    </Sidebar>
  );
};

export default SideBar;
