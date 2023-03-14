import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navmenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  console.log(!item?.subNav?.length, item?.subNav);

  const navigate = useNavigate();

  return (
    <li className="nav-item">
      {!item?.subNav?.length ? (
        <NavLink
          className="nav-link"
          to={item.path}
          onClick={item.subNav && showSubnav}
          state={{ title: item.title }}
        >
          <div>{item.title}</div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </NavLink>
      ) : (
        <>
          <DropdownButton
            className="nav-link test"
            id="dropdown-basic-button"
            title={item.title}
          >
            {item.subNav.map((variant, i) => {
              return (
                <Dropdown.Item key={i} onClick={() => navigate(variant.path, {state : {title: item.title, subTitle: variant.subTitle}})}>
                  {variant.subTitle}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </>
      )}
    </li>
  );
};

export default Navmenu;
