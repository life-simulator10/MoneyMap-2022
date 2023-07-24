import React from 'react'
import { Box,Stack,Typography } from "@pankod/refine-mui";
import {Delete} from '@mui/icons-material/';
import { Button } from '@mui/material';
const Settings = () => {
  return (
      <Box>
        <Typography color="#FCFCFC" fontSize={25} fontWeight={700}>Settings</Typography>
        <Box mt={2.5} bgcolor="#1A1D1F" padding="20px" borderRadius="15px" maxWidth="300px" minHeight="200px" mx="auto" my="auto">
        <Stack direction="column" justifyContent="center" alignItems="center" mt={2}>
            <Stack direction="row" sx={{color:"#4B5E62"}}>
                <Typography>Name    :</Typography>
                <Typography>Bishwa Pangeni</Typography>
            </Stack>
            <Stack direction="row">
                <Typography>Address    : </Typography>
                <Typography>Butwal, Rupandehi</Typography>
            </Stack>
            <Stack mt={5}>

            <Button variant="contained" sx={{marginBottom:"auto"}}> delete<Delete/></Button>
            </Stack>
        </Stack>
        </Box>
    </Box>
  )
}

export default Settings