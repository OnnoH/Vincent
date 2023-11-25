import CardButtons from '../../components/CardButtonsComponent';
import { Grid } from '@mui/material';
import { MqttClient } from 'mqtt/*';

function PictureLibrary({ channel, client }: { channel: string, client: MqttClient }) {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CardButtons channel={channel} client={client} />
                </Grid>
            </Grid>
        </div>
    );
}

export default PictureLibrary