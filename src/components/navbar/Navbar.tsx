import { NavLink } from "react-router-dom";
import "./navbar.css";
import { links, Link } from "../../data";
import { FC, useState } from "react";

export const Navbar: FC = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => setClick(!click);
  return (
    <header className="header">
      <nav className={click ? "navbar active" : "navbar"}>
        {links.map(({ id, link, to }: Link) => (
          <NavLink
            to={to}
            key={id}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? "active" : "unActive")}
          >
            {link}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
