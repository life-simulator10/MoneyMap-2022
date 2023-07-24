import ReactApexChart from "react-apexcharts"
import { Box, Typography, Stack} from "@pankod/refine-mui"

import { PieChartProps } from 'interfaces/home'

const PieChart = ({title, value, series, colors} : PieChartProps) => {
  return (
    <Box id="chart" flex={1} display="flex" bgcolor="#1A1D1F" flexDirection="row" justifyContent="space-between" alignItems="center" pl={3.5} py={2} gap={2} borderRadius="15px" minHeight="185px" minWidth="200px" width="fit-content">
        <Stack direction="column">
            <Typography fontSize={18} color="#6F767E">
                {title}
            </Typography>
            <Typography fontSize={24} color="#FCFCFC" fontWeight={700}>
                $ {value}
            </Typography>
        </Stack>
        <ReactApexChart 
        options={{chart:{type: "donut"},
        colors,
        legend: {show:false},
        dataLabels: {enabled: false}
      }}
      series={series}
      type="donut"
      width="120px"
        />
    </Box>
  )
}

export default PieChart