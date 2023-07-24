import {Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select,MenuItem, Button, borderColor} from "@pankod/refine-mui";
import React from 'react';
import {FormProps} from "../../interfaces/common";
import CustomButton from "./CustomButton";

const AssetForm = ({type,register,handleSubmit,formLoading,onFinishHandler}:FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
        {type} Asset
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#1A1D1F">
        <form style={{marginTop:"20px", width:"100%", display:"flex", flexDirection:"column", gap:"20px"}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
          <Stack direction="row" gap={4}>
            <FormControl sx={{flex:1}}>
              <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
                Select Scrip
              </FormHelperText>

              <Select variant="outlined" color="secondary" displayEmpty required inputProps={{"aria-label":"Without label"}}
              defaultValue="hdl" {...register("scrip",{required:true})}>
                <MenuItem value="" selected disabled>Choose a scrip</MenuItem>
                <MenuItem value="hdl">HDL</MenuItem>
                <MenuItem value="nica">NICA</MenuItem>
                <MenuItem value="bnt">BNT</MenuItem>
                <MenuItem value="NIMB">SHIVM</MenuItem>
                <MenuItem value="NMB">NMB</MenuItem>
              </Select>
            </FormControl>
            
          </Stack>

            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#FCFCFC"}} placeholder="Enter your name">
              Current Balance
            </FormHelperText>
            <TextField fullWidth required type="number" id="outlined-basic" color="info" variant="outlined" {...register("balance",{required:true})} sx={{ input: { color: '#FCFCFC' }}} placeholder="Number of stocks you have..."/>
          </FormControl>

          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Bought At
            </FormHelperText>
            <TextField fullWidth required type="number" id="outlined-basic" color="info" variant="outlined" {...register("boughtat",{required:true})} sx={{ input: { color: '#FCFCFC' }}} placeholder="Price you bought this stock at..."/>
          </FormControl>
          
          

          <CustomButton
          type="submit" title={formLoading? "Adding...":"Add"}
          backgroundColor="#2BC176" color="#fcfcfc"
          />
        </form>

      </Box>
    </Box>
  )
}

export default AssetForm