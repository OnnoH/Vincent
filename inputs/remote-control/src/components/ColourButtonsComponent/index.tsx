import { useState } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import * as Color from '@mui/material/colors';
import ColourButton from '../ColourButtonComponent';
import { MqttClient } from 'mqtt/*';

const fabsList = [
  {
    key: "zwart",
    color: Color.grey[900],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.white',
        bgcolor: Color.grey[900],
        '&:hover': {
          bgcolor: Color.grey[800],
        },
      }
    } as SxProps,
  },
  {
    key: "rood",
    color: Color.red[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.white',
        bgcolor: Color.red[500],
        '&:hover': {
          bgcolor: Color.red[600],
        },
      }
    } as SxProps,
  },
  {
    key: "oranje",
    color: Color.orange[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.black',
        bgcolor: Color.orange[500],
        '&:hover': {
          bgcolor: Color.orange[600],
        },
      }
    } as SxProps,
  },
  {
    key: "geel",
    color: Color.yellow[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.black',
        bgcolor: Color.yellow[500],
        '&:hover': {
          bgcolor: Color.yellow[600],
        },
      }
    } as SxProps,
  },
  {
    key: "groen",
    color: Color.green[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.white',
        bgcolor: Color.green[500],
        '&:hover': {
          bgcolor: Color.green[600],
        },
      }
    } as SxProps,
  },
  {
    key: "blauw",
    color: Color.blue[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.white',
        bgcolor: Color.blue[500],
        '&:hover': {
          bgcolor: Color.blue[600],
        },
      }
    } as SxProps,
  },
  {
    key: "roze",
    color: Color.pink[500],
    active: false,
    loading: false,
    sx: {
      ...{
        color: 'common.white',
        bgcolor: Color.pink[500],
        '&:hover': {
          bgcolor: Color.pink[600],
        },
      }
    } as SxProps,
  },
];

export default function ColourButtons({ channel, client }: { channel: string, client: MqttClient }) {

  const [fabs, setFabs] = useState(fabsList)

  function handleFabClick(indexKey: string) {
    const newFabs = [...fabs]
    newFabs.forEach(fab => {
      fab.active = false
      if (fab.key === indexKey) {
        fab.active = true
        client.publish(
          "Vincent/Colour/" + channel,
          JSON.stringify({ colour: fab.key })
        );
      }
      return fab
    })

    setFabs(newFabs);
  }
  // 
  //   <Box sx={{ '& > :not(style)': { m: 1, position: 'relative' } }}>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {fabs.map(fab => (
        <ColourButton key={fab.key} fab={fab} onClick={handleFabClick} />
      ))}
    </Box>
  )
}