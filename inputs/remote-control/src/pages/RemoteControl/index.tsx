import ColourButtons from '../../components/ColourButtons';
import CursorButtons from '../../components/CursorButtons';
import { Grid } from '@mui/material';
import { MqttClient } from 'mqtt/*';

function RemoteControl({ channel, client }: { channel: string, client: MqttClient }) {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ColourButtons channel={channel} client={client} />
                </Grid>
                <Grid item xs={10}>
                    <CursorButtons channel={channel} client={client} />
                </Grid>
            </Grid>
        </div>
    );
}

export default RemoteControl