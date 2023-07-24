import {Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select,MenuItem, Button, borderColor} from "@pankod/refine-mui";

import {FormProps} from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({type,register,handleSubmit,formLoading,onFinishHandler}:FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
        {type} an account
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#1A1D1F">
        <form style={{marginTop:"20px", width:"100%", display:"flex", flexDirection:"column", gap:"20px"}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#FCFCFC"}} placeholder="Enter your name">
              Enter your name
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" color="info" variant="outlined" {...register("name",{required:true})} sx={{ input: { color: '#FCFCFC' }}} placeholder="Write your name here..."/>
          </FormControl>

          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Enter your address
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" color="info" variant="outlined" {...register("address",{required:true})} sx={{ input: { color: '#FCFCFC' }}} placeholder="Write your address here..."/>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Enter your mail
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" color="info" variant="outlined" {...register("mail",{required:true})} sx={{ input: { color: '#FCFCFC' }}} placeholder="Write your mail here..."/>
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl sx={{flex:1}}>
              <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
                Select Bank
              </FormHelperText>

              <Select variant="outlined" color="secondary" displayEmpty required inputProps={{"aria-label":"Without label"}} {...register("bank",{required:true})} placeholder="Select Bank">
                <MenuItem value="Nabil">Nabil Bank</MenuItem>
                <MenuItem value="Global">Global IME Bank</MenuItem>
                <MenuItem value="Sanima">Sanima Bank</MenuItem>
                <MenuItem value="NIMB">NIMB</MenuItem>
                <MenuItem value="Prabhu">Prabhu Bank</MenuItem>
                <MenuItem value="NIC">NIC Asia</MenuItem>
                <MenuItem value="NMB">NMB</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Enter Your Age
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" type="number" color="info" variant="outlined" {...register("age",{required:true})} sx={{color:"white"}}/>
          </FormControl>
            
          </Stack>
          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Bank Account Number
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" type="string" color="info" variant="outlined" sx={{color:"white"}} {...register("bankaccount",{required:true})} placeholder="A/C No."/>
          </FormControl>
          

          <CustomButton
          type="submit" title={formLoading? "Submitting...":"Submit"}
          backgroundColor="#2BC176" color="#fcfcfc"
          />
        </form>

      </Box>
    </Box>
  )
}

export default Form