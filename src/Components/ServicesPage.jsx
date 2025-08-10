// Services.jsx
import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import Services from "./Services";

const ServicesPage = () => {
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
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <p className="little-section-header">FAQs</p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h1>Чем мы занимаемся</h1>
        </div>

        <div className="service-container">
          <div>
            {/* <h1>Ответы на ваши вопросы</h1> */}
            {/* <p>Остались вопросы? Заполните форму и отправьте Ваш вопрос </p> */}
            <div className="service-image-container">
              <img
                src="https://i.pinimg.com/736x/2f/6c/d6/2f6cd60bd03baef3fe8788d6d95fba69.jpg"
                alt=""
                className="service-page-image"
              />
            </div>
          </div>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <Services
                faq={faq}
                index={index}
                key={index}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

//  <div className="service-container">
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <p
//             style={{
//               backgroundColor: "black",
//               color: "white",
//               fontSize: "small",
//               borderRadius: "25px",
//               width: "100px",
//               textAlign: "center",
//             }}
//           >
//             Услуги
//           </p>
//         </div>

//         <h1>
//           Чем мы <br /> занимаемся
//         </h1>
//         <div className="services-two-parts">
//           <div className="service-image-container">
//             <img
//               src="https://i.pinimg.com/736x/2f/6c/d6/2f6cd60bd03baef3fe8788d6d95fba69.jpg"
//               alt=""
//               className="service-page-image"
//             />
//           </div>

//           <div className="accordion services-accordion" id="accordionExample">
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="true"
//                   aria-controls="collapseOne"
//                 >
//                   Аудит ОП
//                 </button>
//               </h2>
//               <div
//                 id="collapseOne"
//                 className="accordion-collapse collapse show"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Это поможет проверить, как работают бизнес-процессы,
//                     справляются ли менеджеры со своими обязанностями и насколько
//                     эффективно построено управление отделом
//                   </strong>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseTwo"
//                   aria-expanded="false"
//                   aria-controls="collapseTwo"
//                 >
//                   Нахождение критических точек
//                 </button>
//               </h2>
//               <div
//                 id="collapseTwo"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Perspiciatis voluptas corporis error. Nisi excepturi ut
//                     labore autem aliquid laboriosam consequuntur culpa possimus
//                     quis vitae eligendi, atque laborum nobis corporis harum?
//                   </strong>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseThree"
//                   aria-expanded="false"
//                   aria-controls="collapseThree"
//                 >
//                   Инфа
//                 </button>
//               </h2>
//               <div
//                 id="collapseThree"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Facere, nisi distinctio? Dolorum quaerat itaque quod, quasi
//                     maxime recusandae sed ut sapiente commodi cum assumenda
//                     aspernatur? Labore quae eaque sed voluptates?
//                   </strong>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseFour"
//                   aria-expanded="false"
//                   aria-controls="collapseFour"
//                 >
//                   Инфа
//                 </button>
//               </h2>
//               <div
//                 id="collapseFour"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Facere, nisi distinctio? Dolorum quaerat itaque quod, quasi
//                     maxime recusandae sed ut sapiente commodi cum assumenda
//                     aspernatur? Labore quae eaque sed voluptates?
//                   </strong>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseFive"
//                   aria-expanded="false"
//                   aria-controls="collapseFive"
//                 >
//                   Инфа
//                 </button>
//               </h2>
//               <div
//                 id="collapseFive"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Facere, nisi distinctio? Dolorum quaerat itaque quod, quasi
//                     maxime recusandae sed ut sapiente commodi cum assumenda
//                     aspernatur? Labore quae eaque sed voluptates?
//                   </strong>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseSix"
//                   aria-expanded="false"
//                   aria-controls="collapseSix"
//                 >
//                   Инфа
//                 </button>
//               </h2>
//               <div
//                 id="collapseSix"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <strong>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Facere, nisi distinctio? Dolorum quaerat itaque quod, quasi
//                     maxime recusandae sed ut sapiente commodi cum assumenda
//                     aspernatur? Labore quae eaque sed voluptates?
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
