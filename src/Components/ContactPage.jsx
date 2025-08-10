import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const telegramBotToken = "7672180005:AAGJjAdDcpJElqwb8Ae57egZXDI1PMB0BB0";
    const chatId = "1286104651";
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const message = `New Contact Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      alert("Спасибо за Ваш запрос!\nВ скором времени с Вами свяжутся!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Error sending request. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <p
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "25px",
              width: "200px",
              marginTop: "-50px",
              marginBottom: "50px",
            }}
          >
            contact
          </p>
          <h1>Контакты</h1>
          <div>
            <p>
              Если у Вас возникли вопросы или Вы решили начать с нами работать,
              можете отправить Вашу заявку, в самом скором времени мы ее
              рассмотрим и свяжемся с вами
            </p>
          </div>

          <div className="contact-datas">
            <div className="contact-data">
              <p>Офис</p>
              <p>Москва, ул Примерная</p>
            </div>
            <div className="contact-data">
              <p>Email</p>
              <p>hello@mail.com</p>
            </div>
            <div className="contact-data">
              <p>Контактный номер</p>
              <p>88005553535</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Имя*</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иванов Иван"
            required
          />
          <h2>Email*</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ivanov@mail.ru"
            required
          />
          <h2>Контактный номер</h2>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7(999)-999-99-99"
          />
          <h2>Сообщение</h2>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Дайте день, я хотел обсудить..."
          />
          <button onClick={handleSubmit}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
