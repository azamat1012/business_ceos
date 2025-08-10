import React, { useState } from "react";

import Button from "@mui/joy/Button";
import { TbExternalLink } from "react-icons/tb";
import FAQ from "./Faq.jsx";

const FaqPages = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Какие методы оплаты у вас есть?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "Как долго будет длиться вся программа?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "Есть бесплатная консультация?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "Вы будете разбирать все детали моего дела?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "Вы предоставляете гарантии, что поможете мне?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "А мое дело приостановится на период программы?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
    {
      question: "Как к вам попасть?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div className="faqs-container">
      <div>
        <p className="little-section-header">FAQs</p>
        <h1>Ответы на ваши вопросы</h1>
        <p>Остались вопросы? Заполните форму и отправьте Ваш вопрос </p>
        <button type="button" className="connect-button2">
          Связаться <TbExternalLink />
        </button>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default FaqPages;
