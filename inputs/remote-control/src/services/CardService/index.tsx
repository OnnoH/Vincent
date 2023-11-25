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

function Cards() {
    const cards = [
        {
            key: "again",
            title: "Opnieuw",
            object: "opnieuw",
            image: imageReset,
            altText: "Opnieuw beginnen",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "moon",
            title: "Maan",
            object: "maan",
            image: imageMoon,
            altText: "Maangezicht met sterren",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "house",
            title: "Huis",
            object: "huis",
            image: imageHouse,
            altText: "Huisje",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "starlitsky",
            title: "Sterrenhemel",
            object: "sterrenhemel",
            image: imageStarryStarryNight,
            altText: "Starry starry night",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "star",
            title: "Ster",
            object: "ster",
            image: imageStar,
            altText: "Lachende ster",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "dinosaur",
            title: "Dino",
            object: "brachiosaurus",
            image: imageBrachiosaurus,
            altText: "Brachiosaurus",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "flower",
            title: "Bloem",
            object: "flower",
            image: imageFlower,
            altText: "Bloem",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "clover",
            title: "Klavertje 4",
            object: "clover",
            image: imageClover,
            altText: "Klavertje vier",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "stork",
            title: "Ooievaar",
            object: "stork",
            image: imageStork,
            altText: "Ooievaar",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "knight",
            title: "Ridder",
            object: "warrior",
            image: imageWarrior,
            altText: "Ridder te paard",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "snake",
            title: "Slang",
            object: "snake",
            image: imageSnake,
            altText: "Slang",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "dolphinone",
            title: "Dolfijn 1",
            object: "dolphin1",
            image: imageDolphin1,
            altText: "Dolfijn",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "dolphintwo",
            title: "Dolfijn 2",
            object: "dolphin2",
            image: imageDolphin2,
            altText: "Dolfijn",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
        {
            key: "koala",
            title: "Koala",
            object: "koala",
            image: imageKoala,
            altText: "Koalabeer",
            height: 300,
            width: 300,
            active: false,
            loading: false,
        },
    ];

    return cards;
}

export default Cards