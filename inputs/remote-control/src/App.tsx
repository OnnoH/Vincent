import './App.css';
import mqtt from 'mqtt';
import { MqttConfigInterface } from './interfaces/MqttConfigInterface';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RemoteControl from './pages/RemoteControl';
import PictureLibrary from './pages/PictureLibrary';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Nav from './pages/Nav';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MQTT_BROKER_URL: string;
      REACT_APP_MQTT_CHANNEL: string;
    }
  }
}

const mqttConfig: MqttConfigInterface = {
  url: process.env.REACT_APP_MQTT_BROKER_URL,
  channel: process.env.REACT_APP_MQTT_CHANNEL,
};

const client = mqtt.connect(mqttConfig.url);
const channel = mqttConfig.channel;

client.on("connect", () => {
  console.log("CONNECTED to broker");
});

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remote" element={<RemoteControl channel={channel} client={client} />} />
        <Route path="/pictures" element={<PictureLibrary channel={channel} client={client} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
