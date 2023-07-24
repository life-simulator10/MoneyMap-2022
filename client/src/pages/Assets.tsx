
import { Box,Stack,Typography, } from "@pankod/refine-mui";
import CustomButton from 'components/common/CustomButton';
import { useNavigate } from "@pankod/refine-react-router-v6";
import {AssetBox} from "components";
import { useTable } from "@pankod/refine-core";



const Assets = () => {
  const navigate = useNavigate();
  const {
    tableQueryResult: {data, isLoading, isError}
  } = useTable();
  const allAssets = data?.data?? [];
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>

  return (
    <Box>

    
      <Stack sx={{marginTop:"10px"}} direction="row" justifyContent="space-between">
        <Typography fontSize={25} fontWeight={700} color="#FCFCFC">Assets</Typography>
    <CustomButton title="Add Assets" handleClick={()=>navigate("/assets/create")} backgroundColor="#2BC176" color="#fcfcfc" />
    </Stack>

    <Box mt={2}>
    {
            allAssets.length > 0?(allAssets.map((asset) =>(
              <AssetBox key={asset._id} scrip={asset.scrip} balance={asset.balance} boughtat={asset.boughtat}/>
            ))):<Typography mx={40} my={20} color="#FCFCFC" fontSize={25} fontWeight={700}>Nothing to show. Please add an asset.</Typography>
      }
    </Box>
    </Box>
  )
}


export default Assets