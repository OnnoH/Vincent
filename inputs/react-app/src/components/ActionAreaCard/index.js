import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mqtt from "precompiled-mqtt";

const mqttConfig = {
  url: process.env.REACT_APP_MQTT_BROKER_URL,
  channel: process.env.REACT_APP_MQTT_CHANNEL,
};
const client = mqtt.connect(mqttConfig.url);
const channel = mqttConfig.channel;

client.on("connect", () => {
  console.log("CONNECTED to broker");
});

function cardButtonClicked(title, channel) {
  console.log(title);
  if (title === "opnieuw") {
    client.publish(
      "Vincent/Movement/" + channel,
      JSON.stringify({ direction: "opnieuw", number: 1 })
    );
  } else {
    client.publish(
      "Vincent/Object/" + channel,
      JSON.stringify({ object: title })
    );
  }
}

function CardButton({ content }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={() => cardButtonClicked(content.object, channel)}
        >
          <CardMedia
            component="img"
            height={content.height}
            image={content.image}
            alt={content.altText}
          />
          <CardContent>
            <Typography align="center" variant="h5" component="div">
              {content.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CardButton;
