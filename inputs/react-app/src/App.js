import * as React from "react";
import ActionAreaCard from "./components/ActionAreaCard";
import { Images } from "./components/Images";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak from "./Keycloak";
// import Nav from "./components/Nav";
// import WelcomePage from "./pages/Homepage";
// import SecuredPage from "./pages/SecuredPage";

import "./App.css";

function App() {
  const images = Images();
  const cardSize = 300;

  return (
    <div>
      {images.map((image) => (
        <ActionAreaCard
          content={{
            title: image.title,
            object: image.object,
            height: cardSize,
            image: image.image,
            altText: image.altText,
          }}
        />
      ))}
    </div>
  );
}

export default App;
