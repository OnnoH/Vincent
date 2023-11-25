import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircularProgress from '@mui/material/CircularProgress';
import { CursorButtonInterface } from '../../interfaces/CursorButtonInterface';

export default function CursorButton({ fab, onClick }: { fab: CursorButtonInterface, onClick: Function }) {

    const loading: boolean = false

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
            <Fab sx={fab.sx} aria-label={fab.key} color="inherit" onClick={(e) => onClick(fab.key)}>
                {fab.icon}
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