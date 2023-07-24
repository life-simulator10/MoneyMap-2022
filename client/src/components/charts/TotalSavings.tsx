import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack} from "@pankod/refine-mui"

import { ArrowCircleUpRounded } from '@mui/icons-material';

import { TotalSavingOptions, TotalSavingSeries } from './chart.config';
const TotalSavings = () => {
  return (
    <Box p={4} flex={1} bgcolor="#1A1D1F" id="chart" display="flex" flexDirection="column" borderRadius="15px">
      <Typography fontSize={18} fontWeight={600} color="#FCFCFC">
        Total Savings
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#CFC8FF">$178,238</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{fontSize:25, color: "#2ED480"}} />
        
        <Stack>
          <Typography fontSize={15} color="#2ED480">
            0.8%
          </Typography>
          <Typography fontSize={12} color="#6F767E">
            Than last month
          </Typography>
        </Stack>
        </Stack>
      </Stack>
      <ReactApexChart 
        series={TotalSavingSeries}
        type="bar"
        height={310}
        options={TotalSavingOptions}
      />
    </Box>
  )
}

export default TotalSavings