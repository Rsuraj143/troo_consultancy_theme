import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navmenu = ({item}) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <li className="nav-item">
      <Link
        className="nav-link"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div style={{display:"inline-block"}}>{item.title}</div>
        <div style={{ color: "white", display:"inline-block" }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      <ul className={subnav ? "dropdown-menu show" : "dropdown-menu "}>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <li>
                <Link className="dropdown-item" to={item.path} key={index}>
                  {item.subTitle}
                </Link>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default Navmenu;
