import {Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack,  Button} from "@pankod/refine-mui";

import {PostFormProps} from "interfaces/common";
import CustomButton from "./CustomButton";
import { AddPhotoAlternate } from "@mui/icons-material";

const PostForm = ({type,register,handleImageChange,handleSubmit,formLoading,onFinishHandler,postImage}:PostFormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
        {type} a Post
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#1A1D1F">
        <form style={{marginTop:"20px", width:"100%", display:"flex", flexDirection:"column", gap:"20px"}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#FCFCFC"}} placeholder="Enter your name">
              Title
            </FormHelperText>
            <TextField fullWidth required id="outlined-basic" color="info" variant="outlined" {...register("title",{required:true})} sx={{ input: { color: '#FCFCFC' }}}  placeholder="Write your title here..."/>
          </FormControl>

          <FormControl>
            <FormHelperText sx={{fontWeight:500, margin:"10px 0", fontSize:16, color:"#fff"}}>
              Enter Description
            </FormHelperText>
                <TextareaAutosize minRows={5} required placeholder="Write Description" color="info" style={{width:"100%", background:"transparent", fontSize:"16px", borderColor:"rgba(0,0,0,0.23)", borderRadius:6, padding:10, color:"#FCFCFC"}} {...register("description",{required:true})}/>
          </FormControl>
          

            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                <Stack direction="row" gap={2}>
                    <Typography color="#fcfcfc" fontSize={16} fontWeight={500} my="10px">
                        Photo Here
                    </Typography>
                    <Button component="label" sx={{width:"fit-content", color:"#2ed480" }}>
                        <AddPhotoAlternate/>
                        <input type="file" accept="image/*" hidden onChange={(e)=>{
                            //@ts-ignore
                            handleImageChange(e.target.files[0])
                        }}/>
                    </Button>
                </Stack>
                <Typography fontSize={14} color="#FCFCFC" sx={{wordBreak:"break-all"}}>{postImage?.name}</Typography>
            </Stack>
                  
          
          <CustomButton
          type="submit" title={formLoading? "Posting...":"Post"}
          backgroundColor="#2BC176" color="#fcfcfc" 
          />

        </form>

      </Box>
    </Box>
  )
}

export default PostForm