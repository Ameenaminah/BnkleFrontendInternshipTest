import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { links } from "../../data";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const onUpdateActiveLink = (value) => {
  //   setLink(value);
  // };
  const handleClick = () => setClick(!click);
  return (
    <header className={scrolled ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        Bnkle
      </Link>
      <nav className={click ? "navbar active" : "navbar"}>
        {links.map(({ id, link, to }) => (
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
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};
