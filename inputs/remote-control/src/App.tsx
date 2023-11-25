import './App.css';

import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RemoteControl from './pages/RemoteControlPage';
import PictureLibrary from './pages/PictureLibraryPage';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import NoMatch from './pages/NotFoundPage';
import Nav from './pages/NavPage';
import SecuredPage from './components/SecuredPage';
import MqttService from './services/MqttService';


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MQTT_BROKER_URL: string;
      REACT_APP_MQTT_CHANNEL: string;
      REACT_APP_KEYCLOAK_URL: string;
      REACT_APP_KEYCLOAK_REALM: string;
      REACT_APP_KEYCLOAK_CLIENT: string;
    }

  }
}

// const channel = MqttService.mqttConfig.channel;

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remote" element={<SecuredPage><RemoteControl channel={channel} client={client} /></SecuredPage>} />
        <Route path="/pictures" element={<SecuredPage><PictureLibrary channel={channel} client={client} /></SecuredPage>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
