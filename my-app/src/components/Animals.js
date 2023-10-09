import React from "react";
import classes from "./Animals.module.css";
import ImgAnimal1 from "../assets/an-1.jpg";
import ImgAnimal2 from "../assets/an-2.jpg";
import ImgAnimal3 from "../assets/an-3.jpg";
import ImgAnimal4 from "../assets/an-4.jpg";
import ImgAnimal5 from "../assets/an-5.jpg";
import LayoutSections from "./layout/LayoutSections";
import Slider from "./layout/Slider";

const animals = [
  {
    src: ImgAnimal1,
    id: "animal1",
    especie: "Iguana",
    descricao:
      "Rồng Nam Mỹ, hay còn gọi là Cự Đà Xanh, Cự Đà Nam Mỹ có tên tiếng anh là Iguana. Là một loài bò sát cảnh cỡ lớn trên thế giới.",
  },
  {
    src: ImgAnimal2,
    id: "animal2",
    especie: "Lion",
    descricao:
      "Sư tử là một loài động vật hoang dã thuộc họ Họ Mèo (Felidae) và là một trong những loài thú săn mồi lớn nhất trên Trái Đất",
  },
  {
    src: ImgAnimal3,
    id: "animal3",
    especie: "Flamingo",
    descricao:
      "Hồng hạc là một loài chim nước lớn và đẹp, thuộc họ Anatidae. Loài này thường được biết đến với vẻ ngoại hình quyến rũ và bản lĩnh, và nó là một trong những loài chim thường xuất hiện trong văn hóa và nghệ thuật của nhiều quốc gia.",
  },
  {
    src: ImgAnimal4,
    id: "animal4",
    especie: "Rhino",
    descricao:
      "Tê giác là một loài động vật có vú lớn thuộc họ Rhinocerotidae. Chúng được biết đến với sự đặc biệt của một số loài có một hoặc nhiều sừng dài trên mũi.",
  },
  {
    src: ImgAnimal5,
    id: "anima5",
    especie: "Rhinopithecus",
    descricao:
      "Voọc mũi hếch Trung Quốc còn được gọi là Voọc lông tuyết là nhóm loài thuộc họ Khỉ Cựu Thế giới. Chi này hiếm xuất hiện và cần được bảo tồn.",
  },
];

const Animals = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="ANIMALS"
        className={classes.content}
      >
        <p>
        Zooly are places where people can see and learn about many types of animals from around the world.
        </p>

        <a href="/" className={`btn-preto ${classes.link}`}>
          Discover Now
        </a>
      </LayoutSections>
      <Slider className={classes.slider}>
        {animals.map((animal) => (
          <li key={animal.id} className={classes.itemAnimal}>
            <img src={animal.src} alt={animal.especie} />
            <h3>{animal.especie}</h3>

            <p>{animal.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Animals;
