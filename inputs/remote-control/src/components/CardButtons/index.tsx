import { useState } from 'react';
import CardButton from "../CardButton";
import Cards from "../Cards"
import { MqttClient } from 'mqtt/*';
import { Grid } from '@mui/material';

const cardsList = Cards();

function CardButtons({ channel, client }: { channel: string, client: MqttClient }) {

    const [cards, setCards] = useState(cardsList)

    function handleCardClick(indexKey: string) {
        const newCards = [...cards]
        cards.forEach(card => {
            card.active = false
            if (card.key === indexKey) {
                card.active = true
                if (indexKey === "opnieuw") {
                    client.publish(
                        "Vincent/Movement/" + channel,
                        JSON.stringify({ direction: "opnieuw", number: 1 })
                    );
                } else {
                    client.publish(
                        "Vincent/Object/" + channel,
                        JSON.stringify({ object: card.object })
                    );
                }
            }
            return card
        })

        setCards(newCards);

    }

    return (
        <div>
            <Grid container direction="row"
            >
                {cards.map((card) => (
                    <CardButton key={card.key} card={card} onClick={handleCardClick} />
                ))}
            </Grid>
        </div>
    );

}

export default CardButtons