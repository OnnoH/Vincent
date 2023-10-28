import imageReset from "../../assets/images/movement/start-over.png";
import imageBrachiosaurus from "../../assets/images/objects/brachiosaurus.png";
import imageClover from "../../assets/images/objects/clover.png";
import imageDolphin1 from "../../assets/images/objects/dolphin1.png";
import imageDolphin2 from "../../assets/images/objects/dolphin2.png";
import imageFlower from "../../assets/images/objects/flower.png";
import imageHouse from "../../assets/images/objects/house.png";
import imageKoala from "../../assets/images/objects/koala.png";
import imageMoon from "../../assets/images/objects/moon.png";
import imageSnake from "../../assets/images/objects/snake.png";
import imageStar from "../../assets/images/objects/star.png";
import imageStarryStarryNight from "../../assets/images/objects/starry-starry-night.png";
import imageStork from "../../assets/images/objects/stork.png";
import imageWarrior from "../../assets/images/objects/warrior.png";

export function Images() {
  const images = [
    {
      title: "Opnieuw",
      object: "opnieuw",
      image: imageReset,
      altText: "Opnieuw beginnen",
    },
    {
      title: "Maan",
      object: "maan",
      image: imageMoon,
      altText: "Maangezicht met sterren",
    },
    {
      title: "Huis",
      object: "huis",
      image: imageHouse,
      altText: "Huisje",
    },
    {
      title: "Sterrenhemel",
      object: "sterrenhemel",
      image: imageStarryStarryNight,
      altText: "Starry starry night",
    },
    {
      title: "Ster",
      object: "ster",
      image: imageStar,
      altText: "Lachende ster",
    },
    {
      title: "Dino",
      object: "brachiosaurus",
      image: imageBrachiosaurus,
      altText: "Brachiosaurus",
    },
    {
      title: "Bloem",
      object: "flower",
      image: imageFlower,
      altText: "Bloem",
    },
    {
      title: "Klavertje 4",
      object: "clover",
      image: imageClover,
      altText: "Klavertje vier",
    },
    {
      title: "Ooievaar",
      object: "stork",
      image: imageStork,
      altText: "Ooievaar",
    },
    {
      title: "Ridder",
      object: "warrior",
      image: imageWarrior,
      altText: "Ridder te paard",
    },
    {
      title: "Slang",
      object: "snake",
      image: imageSnake,
      altText: "Slang",
    },
    {
      title: "Dolfijn 1",
      object: "dolphin1",
      image: imageDolphin1,
      altText: "Dolfijn",
    },
    {
      title: "Dolfijn 2",
      object: "dolphin2",
      image: imageDolphin2,
      altText: "Dolfijn",
    },
    {
      title: "Koala",
      object: "koala",
      image: imageKoala,
      altText: "Koalabeer",
    },
  ];

  return images;
}
