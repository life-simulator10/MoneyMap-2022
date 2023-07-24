import { Add } from "@mui/icons-material";
import { Box,Stack,Typography } from "@pankod/refine-mui";
import {  useShow } from "@pankod/refine-core";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useTable } from "@pankod/refine-core";

import { AccountBox } from "components";

import { PostCard,CustomButton } from "components";
import { useMemo } from "react";

const Accounts = () => {
  
  const navigate = useNavigate();
  const {
    tableQueryResult: {data, isLoading, isError}
  } = useTable();
  const allAccounts = data?.data?? [];
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>

  return (
    <>
    <Box>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
        Accounts
      </Typography>
    <CustomButton title="Add Accounts" handleClick={()=>navigate("/accounts/create")} backgroundColor="#2ED480" color="#fcfcfc" icon={<Add/>} />
    </Stack>
    </Box>
      <Box>
      {
            allAccounts.length > 0?(allAccounts.map((account) =>(
              <AccountBox key={account._id} name={account.name} address={account.address} mail={account.mail} age={account.age} bank={account.bank} bankaccount = {account.bankaccount} />
            ))):<Typography mx={40} my={20} color="#FCFCFC" fontSize={25} fontWeight={700}>Nothing to show. Please Create an Account.</Typography>
      }
      </Box>
      </>
  )
}

export default Accounts