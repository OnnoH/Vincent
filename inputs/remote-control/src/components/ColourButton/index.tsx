import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from '@mui/material/CircularProgress';
import { ColourButtonInterface } from '../../interfaces/ColourButtonInterface';

function ColourButton({ fab, onClick }: { fab: ColourButtonInterface, onClick: Function }) {

    const loading: boolean = false

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 0.5 }}>
            <Fab sx={fab.sx} aria-label={fab.key} color="inherit" onClick={(e) => onClick(fab.key)} >
                {fab.active ? <CheckIcon /> : ""}
            </Fab>
            {loading && fab.active && <CircularProgress
                size={68}
                sx={{
                    color: fab.color,
                    position: 'relative',
                    top: 0,
                    left: -62,
                }}
            />}
        </Box>
    )
}

export default ColourButton