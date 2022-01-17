import React, { useState } from "react";

const Menu = (props) => {
  const [open, setopen] = useState("0px");
  function openNav() {
    setopen("100%");
  }

  function closeNav() {
    setopen("0px");
  }
  return (
    <>
      <div id="mySidenav" className="sidenav" style={{ width: open }}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        {/* <a href="#">About</a> */}
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span className="handlebar" onClick={() => openNav()}>
        &#9776;
      </span>
    </>
  );
};

export default Menu;
