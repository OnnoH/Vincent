import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardButtonInterface } from '../../interfaces/CardButtonInterface';


function CardButton({ card, onClick }: { card: CardButtonInterface, onClick: Function }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={(e) => onClick(card.key)}>
                    <CardMedia
                        component="img"
                        height={card.height}
                        width={card.width}
                        image={card.image}
                        alt={card.altText}
                    />
                    <CardContent>
                        <Typography align="center" variant="h5" component="div">
                            {card.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );

}

export default CardButton