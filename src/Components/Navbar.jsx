import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
            >
              О нас
            </Link>
            <Link
              className="nav-link"
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Услуги
            </Link>
            <Link
              className="nav-link"
              to="work"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Работы
            </Link>
            <Link
              className="nav-link"
              to="faqs"
              smooth={true}
              duration={500}
              offset={-80}
            >
              FAQs
            </Link>
            <Link
              className="nav-link"
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Контакт
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
