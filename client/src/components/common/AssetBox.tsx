import React from 'react'
import { Box,Stack,Typography, TableContainer, Table,TableHead, TableBody,TableRow,TableCell, Paper } from "@pankod/refine-mui";
import { CustomButton } from "components";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { Add } from "@mui/icons-material";

interface AssetProps{
    scrip: string;
    balance: number;
    boughtat: number;
  }


const AssetBox: React.FC<AssetProps> = ({scrip,balance,boughtat})=> {
    let currentPrice= 1987;
    let delta = (((currentPrice-boughtat)/boughtat)*100).toFixed(2);
    let color = +delta>=0? "#2ED480":"#FF0000";
    let deltanew = Math.abs(Number(delta));
    const navigate = useNavigate();
  return (
    <>
    <Box>
<TableContainer component={Paper} sx={{bgcolor:"#1A1D1F"}}>
        <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{color:"#6F767E"}} align="center">List</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Scrip</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Current Balance</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Current Price</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Bought At</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Total Delta(%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  <TableRow>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">1</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{scrip}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{balance}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{currentPrice}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{boughtat}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33", color:{color}}} align="center">{deltanew}</TableCell>
                  </TableRow>
                
            </TableBody>
        </Table>
    </TableContainer>
    </Box>
    </>
  )
}

export default AssetBox