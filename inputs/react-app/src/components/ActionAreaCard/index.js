import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mqtt from "precompiled-mqtt";

const URL = "ws://192.168.1.73:9001";
const client = mqtt.connect(URL);

client.on("connect", () => {
  console.log("CONNECTED to broker");
});

function cardButtonClicked(title) {
  if (title === "opnieuw") {
    client.publish(
      "Vincent/Movement",
      JSON.stringify({ direction: "opnieuw", number: 1 })
    );
  } else {
    client.publish("Vincent/Object", JSON.stringify({ object: title }));
  }
}

function CardButton({ content }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={() => cardButtonClicked(content.title.toLowerCase())}
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
