import * as React from "react";
import { FaStar } from "react-icons/fa"; 
import { TbExternalLink } from "react-icons/tb";

export default function MainPage() {
  return (
    <div className="main-page-section">
      <div className="left-main-page-section">
        <h1>Программа для обучения руководителей отдела продаж</h1>
        <p>
          Эта программа разработана для руководителей. Она гарантирует вам
          построить эффективную систему продаж. Вы научитесь управлять
          процессами отдела продаж и улучшать показатели.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button type="button" className="connect-button">
            Связаться <TbExternalLink />
          </button>
        </div>
      </div>
      <div className="right-main-page-section">
        <div className="main-page-image-container">
          <img
            src="https://i.pinimg.com/1200x/69/f3/8b/69f38b7018fc89cccc463fd402b60d92.jpg"
            alt="Program illustration"
            className="main-page-image"
          />
        </div>
        <div className="quote-main-page-section">
          <div style={{ paddingBottom: "10px", color: "white" }}>
            <FaStar style={{ color: "white" }} />
            <FaStar style={{ color: "white" }} />
            <FaStar style={{ color: "white" }} />
            <FaStar style={{ color: "white" }} />
            <FaStar style={{ color: "white" }} />
          </div>
          <p>“Благодаря этой программе, мое дело начало расти”</p>
        </div>
      </div>
    </div>
  );
}
