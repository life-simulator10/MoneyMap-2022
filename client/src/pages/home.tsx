import { Typography ,Box, Stack } from "@pankod/refine-mui"

import { useList } from "@pankod/refine-core";
import {
  PieChart, TotalSavings
} from "components";

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4} >
        <PieChart title="Expenses" value={684} series={[60,40]} colors={["#2ED480","#272B30"]}/>
        <PieChart title="Earnings" value={684} series={[75,25]} colors={["#2ED480","#272B30"]}/>
        <PieChart title="Bonuses" value={2684} series={[40,60]} colors={["#2ED480","#272B30"]}/>
      </Box>

      <Stack mt="25px" width="100%" direction={{xs:"column",lg:"row"}} gap={4}>
        <TotalSavings/>
      </Stack>
    </Box>
  )
}

export default home