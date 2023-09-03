import * as React from "react";
import ActionAreaCard from "./components/ActionAreaCard";
import imageMoon from "./assets/images/objects/moon.png";
import imageStar from "./assets/images/objects/star.png";
import imageReset from "./assets/images/movement/start-over.png";
import "./App.css";

function App() {
  return (
    <div>
      <ActionAreaCard
        content={{
          title: "Maan",
          height: 200,
          image: imageMoon,
          altText: "Maangezicht met sterren",
        }}
      />
      <ActionAreaCard
        content={{
          title: "Ster",
          height: 200,
          image: imageStar,
          altText: "Lachende ster",
        }}
      />
      <ActionAreaCard
        content={{
          title: "Opnieuw",
          height: 200,
          image: imageReset,
          altText: "Opnieuw beginnen",
        }}
      />
    </div>
  );
}

export default App;
