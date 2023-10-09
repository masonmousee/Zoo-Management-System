import React, { useState } from "react";
import classes from "./Faq.module.css";
import LayoutSections from "./layout/LayoutSections";
import ImgGorila from "../assets/giraffe.png";

const questions = [
  {
    question: "Địa chỉ Zooly ở đâu?",
    answer:
      "2 Nguyen Binh Khiem, Ben Nghe Town, District 1, Ho Chi Minh City.",
    id: "p1",
  },
  {
    question: "Mục tiêu và sứ mệnh của Zooly?",
    answer: "...",
    id: "p2",
  },
  {
    question: "Có các loại hình giải trí nào ở Zooly?",
    answer:
      "...",
    id: "p3",
  },
  {
    question: "Lịch sử hình thành và phát triển của Zooly?",
    answer:
      "...",
    id: "p4",
  },
  {
    question: "Cách đặt vé online của Zooly?",
    answer: "...",
    id: "p5",
  },
];

const Faq = () => {
  const [answerToShown, setAnswerToShown] = useState(questions[0].id);

  const showAnswerHandler = (id) => {
    setAnswerToShown(id);
  };

  return (
    <section className={classes.section}>
      <LayoutSections subtitle="Ask us some questions" title="FAQ">
        <ul className={classes.questionList}>
          {questions.map((q) => (
            <li key={q.id}>
              <button
                onClick={() => showAnswerHandler(q.id)}
                className={answerToShown === q.id ? classes.visible : ""}
              >
                {q.question}
              </button>
              <p
                className={`${classes.answer} ${
                  answerToShown === q.id ? classes.visible : ""
                }`}
              >
                {q.answer}
              </p>
            </li>
          ))}
        </ul>
        <a href="/" className="btn-verde">
          See More
        </a>
      </LayoutSections>
      <div className={classes.imgContainer}>
        <img src={ImgGorila} alt="gorila" />
      </div>
    </section>
  );
};

export default Faq;
