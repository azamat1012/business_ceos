import React from "react";

const WorkPage = () => {
  return (
    <div className="work-container">
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
            marginTop: "-50px",
          }}
        >
          Работа
        </p>
      </div>

      <h1>Успех кроется в постоянном совершенствовании деталей</h1>
      <p>
        Но порою сложно найти, в чем же заключаются детали <br />
        Наша команда <strong>гарантирует</strong> их найти
      </p>
    </div>
  );
};

export default WorkPage;
