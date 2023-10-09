import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./Trainer.module.css";
import ImgActivity1 from "../assets/at-1.jpg";
import ImgActivity2 from "../assets/at-2.jpg";
import ImgActivity3 from "../assets/at-3.jpg";
import ImgActivity4 from "../assets/at-4.jpg";
import ImgTrainerProfile from "../assets/trainers-profile.jpg";
import Slider from "./layout/Slider";

const activities = [
  {
    src: ImgTrainerProfile,
    id: "trainer1",
    name: "Hoang Do Toan",
    descricao:
      "",
  },
  {
    src: ImgTrainerProfile,
    id: "trainer2",
    name: "Tran Ngoc Viet",
    descricao:
      "",
  },
  {
    src: ImgTrainerProfile,
    id: "trainer3",
    name: "Tran Hoang Phong",
    descricao:
      "",
  },
  {
    src: ImgTrainerProfile,
    id: "trainer4",
    name: "Tran Anh Khang",
    descricao:
      "",
  },
];

const Activities = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Trainer Information"

      >
        <p className={classes.txt}>
        Animal Trainers: Special Bonds with Animals.
        </p>
        <a href="/" className="btn-verde">
          Discover Now
        </a>
      </LayoutSections>
      <Slider>
        {activities.map((activity) => (
          <li key={activity.id} className={classes.itemActivity}>
            <img src={activity.src} alt={activity.name} />
            <h3>{activity.name}</h3>
            <p>{activity.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Activities;
