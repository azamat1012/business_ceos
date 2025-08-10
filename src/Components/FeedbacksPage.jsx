import React from "react";
import { GoStarFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const FeedbacksPage = () => {
  return (
    <div>
      <h1 style={{ display: "block", paddingBottom: "50px" }}>
        Отзывы наших клиетов
      </h1>
      <div className="feedback-container">
        <div className="feedback">
          <div className="stars-container">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            nihil voluptas corrupti eius quibusdam vitae saepe in, temporibus
            omnis consectetur reprehenderit asperiores culpa sint quisquam
            explicabo aspernatur doloribus eos? Sint!
          </p>
          <p>
            <CgProfile /> Эмили Бакши
          </p>
        </div>
        <div style={{ padding: "10px" }}></div>
        <div className="feedback">
          <div className="stars-container">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            nihil voluptas corrupti eius quibusdam vitae saepe in, temporibus
            omnis consectetur reprehenderit asperiores culpa sint quisquam
            explicabo aspernatur doloribus eos? Sint!
          </p>
          <p>
            <CgProfile /> Эмили Бакши
          </p>
        </div>
        <div style={{ padding: "10px" }}></div>

        <div className="feedback">
          <div className="stars-container">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            nihil voluptas corrupti eius quibusdam vitae saepe in, temporibus
            omnis consectetur reprehenderit asperiores culpa sint quisquam
            explicabo aspernatur doloribus eos? Sint!
          </p>
          <p>
            <CgProfile /> Эмили Бакши
          </p>
        </div>
        <div style={{ padding: "10px" }}></div>

        <div className="feedback">
          <div className="stars-container">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            nihil voluptas corrupti eius quibusdam vitae saepe in, temporibus
            omnis consectetur reprehenderit asperiores culpa sint quisquam
            explicabo aspernatur doloribus eos? Sint!
          </p>
          <p>
            <CgProfile /> Эмили Бакши
          </p>
        </div>
        <div style={{ padding: "10px" }}></div>
      </div>
    </div>
  );
};

export default FeedbacksPage;
