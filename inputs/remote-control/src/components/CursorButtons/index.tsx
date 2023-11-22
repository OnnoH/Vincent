import { useState } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { brown } from '@mui/material/colors';
import CursorButton from '../CursorButton';
import { MqttClient } from 'mqtt/*';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CursorButtonInterface } from '../../interfaces/CursorButtonInterface';

const fabStyle = {
    color: 'common.black',
    bgcolor: brown[500],
    '&:hover': {
        bgcolor: brown[600],
    },
}

const rows = [1, 2, 3]

var fabsList = [
    {
        key: "voor",
        row: 1,
        color: brown[500],
        active: false,
        icon: <ArrowUpwardIcon />,
        sx: { ...fabStyle } as SxProps
    },
    {
        key: "op-rechts",
        row: 2,
        color: brown[500],
        active: false,
        icon: <ArrowOutwardIcon />,
        sx: { ...fabStyle } as SxProps
    },
    {
        key: "terug",
        row: 3,
        color: brown[500],
        active: false,
        icon: <ArrowDownwardIcon />,
        sx: { ...fabStyle } as SxProps
    },
    {
        key: "links",
        row: 2,
        color: brown[500],
        active: false,
        icon: <ArrowBackIcon />,
        sx: { ...fabStyle } as SxProps
    },
    {
        key: "rechts",
        row: 2,
        color: brown[500],
        active: false,
        icon: <ArrowForwardIcon />,
        sx: { ...fabStyle } as SxProps
    },
]

export default function CursorButtons({ channel, client }: { channel: string, client: MqttClient }) {

    const [fabs, setFabs] = useState(fabsList)

    function handleFabClick(indexKey: string) {
        const newFabs = [...fabs]
        newFabs.forEach(fab => {
            fab.active = false
            if (fab.key === indexKey) {
                fab.active = true
                client.publish(
                    "Vincent/Movement/" + channel,
                    JSON.stringify({ direction: fab.key, number: 100 })
                );
            }
            return fab
        })

        setFabs(newFabs);
    }

    function filterFab(row: number, fab: CursorButtonInterface) {
        return fab.row === row
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {rows.map(row => (
                <Box sx={{ '& > :not(style)': { m: 1, position: 'relative' } }}>
                    {fabs.map(fab => (
                        filterFab(row, fab)
                            ? <CursorButton key={fab.key} fab={fab} onClick={handleFabClick} />
                            : <div />
                    ))}
                </Box>
            ))}
        </Box>);
}