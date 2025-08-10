import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ModulesPage = () => {
  return (
    <div>
      <div className="module-container1">
        <div>
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="module-image1"
          />
        </div>
        <div className="module-right-side">
          <h1 style={{ paddingBottom: "10px" }}>
            Модуль 1: Стратегия и система продаж
          </h1>
          <div className="module-list">
            <ol>
              <li>
                Построение системы - Переход от хаоса к управляемым процессам.
              </li>
              <li>
                Воронка продаж - От первого контакта до повторных покупок.
              </li>
              <li>
                Методологии продаж - Выбор и адаптация под специфику бизнеса.
              </li>
              <li>Планы и KPI - Как ставить реалистичные и достижимые цели.</li>
            </ol>
          </div>
          <div className="module-elements">
            <em className="el-1">Лидерство</em>
            <em className="el-2">Управление</em>
            <em className="el-3">Онлайн и живые встречи</em>
            <em className="el-4">1 неделя</em>
          </div>
          <h1
            style={{
              paddingRight: "710px",
            }}
          >
            "
          </h1>
          <h5 className="module-quote-section">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            nobis rerum aliquam voluptatem asperiores rem eaque cumque non
            repudiandae magnam, molestias ullam veniam enim atque veritatis
            explicabo velit cupiditate distinctio?
          </h5>
          <div className="module-quote-section-footer">
            <img
              src="https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="module-image2"
            />
            <p>Генеральный директор drive fitness</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "100px" }}></div>
      {/* SECOND BLOCK */}
      <div className="module-container2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="module-image1"
          />
        </div>
        <div className="module-right-side">
          <h1 style={{ paddingBottom: "10px" }}>
            Модуль 2: Команда — от найма до результата
          </h1>
          <div className="module-list-white">
            <ol>
              <li>Поиск лучших - Где и как находить сильных менеджеров.</li>
              <li>Адаптация - Чек-лист для быстрого включения в работу.</li>
              <li>
                Мотивация - Все виды стимулов. Готовые примеры для сотрудников.
              </li>
              <li>
                Эффективные планерки - Как проводить продуктивные собрания
                быстро и результативно.
              </li>
            </ol>
          </div>
          <div className="module-elements">
            <em className="el-1-white">Аналитика</em>
            <em className="el-2-white">Цифры</em>
            <em className="el-3-white">Живые встречи</em>
            <em className="el-4-white">2-3 неделя</em>
          </div>
          <h1
            style={{
              paddingRight: "710px",
            }}
          >
            "
          </h1>
          <h5 className="module-quote-section">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            nobis rerum aliquam voluptatem asperiores rem eaque cumque non
            repudiandae magnam, molestias ullam veniam enim atque veritatis
            explicabo velit cupiditate distinctio?
          </h5>
          <div className="module-quote-section-footer">
            <img
              src="https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="module-image2"
            />
            <p>CEO компании “стройдом”</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "100px" }}></div>

      {/* THIRD BLOCK */}
      <div className="module-container3">
        <div>
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="module-image1"
          />
        </div>
        <div className="module-right-side">
          <h1 style={{ paddingBottom: "10px" }}>
            Модуль 3: Аналитика и автоматизация
          </h1>
          <div className="module-list">
            <ol>
              <div className="module-lists-long">
                <div>
                  <li>Основные показатели</li>
                  <li>
                    Ключевые метрики для оценки <br />
                    эффективности.
                  </li>
                  <li>Конверсия воронки.</li>
                  <li>Средний чек.</li>
                  <li>LTV клиента.</li>
                </div>
                <div>
                  <li>CRM-система.</li>
                  <li>
                    Выбор, внедрение и <br />
                    использование CRM.
                  </li>
                  <li>Автоматизация рутины.</li>
                  <li>Единая база клиентов.</li>
                  <li>Отчетность и аналитика.</li>
                </div>
              </div>
            </ol>
          </div>
          <div className="module-elements">
            <em className="el-1">CRM-системы.</em>
            <em className="el-2">Живые встречи</em>
            <em className="el-3">4 неделя</em>
          </div>
          <h1
            style={{
              paddingRight: "710px",
            }}
          >
            "
          </h1>
          <h5 className="module-quote-section">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            nobis rerum aliquam voluptatem asperiores rem eaque cumque non
            repudiandae magnam, molestias ullam veniam enim atque veritatis
            explicabo velit cupiditate distinctio?
          </h5>
          <div className="module-quote-section-footer">
            <img
              src="https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="module-image2"
            />
            <p>Руководитель многих бутик-салонов красоты</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}></div>

      {/* FOURTH BLOCK */}
      <div className="module-container4">
        <div>
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="module-image1"
          />
        </div>
        <div className="module-right-side">
          <h1 style={{ paddingBottom: "10px" }}>
            Модуль 4: Переговоры и управление возражениями
          </h1>
          <div className="module-list-white">
            <ol>
              <li>
                Сложные сделки - Роль руководителя в ключевых переговорах.
              </li>
              <li>
                Скрипты - Разработка эффективных ответов на возражения. <br />{" "}
                Доработка действующей системы.
              </li>
              <li>
                «Токсичные» клиенты - Стратегии работы с трудными случаями.
              </li>
            </ol>
          </div>
          <div className="module-elements">
            <em className="el-1">Переговоры</em>
            <em className="el-2">Ролевые игры</em>
            <em className="el-3">Живые встречи</em>
            <em className="el-4">5 неделя</em>
          </div>
          <h1
            style={{
              paddingRight: "710px",
            }}
          >
            "
          </h1>
          <h5 className="module-quote-section">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            nobis rerum aliquam voluptatem asperiores rem eaque cumque non
            repudiandae magnam, molestias ullam veniam enim atque veritatis
            explicabo velit cupiditate distinctio?
          </h5>
          <div className="module-quote-section-footer">
            <img
              src="https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="module-image2"
            />
            <p>CEO компании “стройдом”</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "50px" }}></div>
    </div>
  );
};

export default ModulesPage;
