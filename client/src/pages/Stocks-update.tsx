
import { Box,Stack,Typography, TableContainer, Table,TableHead, TableBody,TableRow,TableCell, Paper } from "@pankod/refine-mui";
import React, {useState, useEffect} from 'react'
import { useShow } from "@pankod/refine-core";

interface LiveNepse{
  scrip: string;
  ltp: string;
  percent_change: string;
  high: string;
  low: string;
  lowvalue: string;
  qty: string;
}



const StocksUpdate = () => {
  let result: LiveNepse[] =[]
  const [Datas, setData] = useState(result);
  const updateData = async ()=> {
    const url = `http://localhost:8080/api/v1/nepsedata`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setData(parsedData.result)
};

useEffect(() => {
  updateData();
},[]);

  return (
    <Box>
        <Stack sx={{marginTop:"10px"}} direction="row" justifyContent="space-between" mb={4}>
        <Typography fontSize={25} fontWeight={700} color="#FCFCFC">Live Stock Data</Typography>
    </Stack>
    <Box>
<TableContainer component={Paper} sx={{bgcolor:"#1A1D1F"}}>
        <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{color:"#6F767E"}} align="center">Scrip</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">LTP</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">% Change</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">High</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Low</TableCell>
                <TableCell sx={{color:"#6F767E"}} align="center">Quantity</TableCell>
              </TableRow>
            </TableHead>
                { Datas?.map(element=>{
                  return(
              <TableBody>
                  <TableRow>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{element.scrip}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{element.ltp}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:+element.percent_change>0? "#2ED480":"#FF0000"}} align="center">{element.percent_change}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{element.high}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{element.low}</TableCell>
                    <TableCell sx={{bgcolor:"#2A2F33",color:"#FFF"}} align="center">{element.qty}</TableCell>
                  </TableRow>
            </TableBody>)
})}
        </Table>
    </TableContainer>
    </Box>
    </Box>
  )
}

export default StocksUpdate