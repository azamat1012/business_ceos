import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div>
      <div></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "25px",
            width: "200px",
            marginTop: "100px",
          }}
        >
          О нас
        </p>
      </div>
      <h1>Обзор программы</h1>
      <div>
        <p>
          Программа разделена на модули, каждый из которых охватывает важные
          аспекты управления продажами. Обучение включает онлайн-занятия, живые
          встречи и самостоятельную работа.
        </p>
      </div>
      <div className="about-programms-containers">
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <div className="about-program-container-1">
            <h1>I</h1>
            <div className="blanks1"></div>
            <p>Знакомство с платформой, постановка целей.</p>
            <div className="blanks2"></div>
            <p>Начало программы</p>
            <FontAwesomeIcon icon={faCaretRight} className="hover-icon" />
          </div>
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <div className="about-program-container-2">
            <h1>II</h1>
            <div className="blanks1"></div>
            <p>Глубокое погружение в ключевые темы.</p>
            <div className="blanks2"></div>
            <p>Основные модули</p>
            <FontAwesomeIcon icon={faCaretRight} className="hover-icon" />
          </div>
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <div className="about-program-container-3">
            <h1>III</h1>
            <div className="blanks1"></div>
            <p>Применение знаний на реальных кейсах.</p>
            <div className="blanks2"></div>
            <p>Практические занятия</p>
            <FontAwesomeIcon icon={faCaretRight} className="hover-icon" />
          </div>
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <div className="about-program-container-4">
            <h1>IV</h1>
            <div className="blanks1"></div>
            <p>Защита проекта, получение сертификата.</p>
            <div className="blanks2"></div>
            <p>Финальная аттестация</p>
            <FontAwesomeIcon icon={faCaretRight} className="hover-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
