import React from 'react';
import {Link} from  "react-router-dom";
import {Box,Stack,Typography, Button} from "@pankod/refine-mui";

interface NewsProps{
  title: string;
  description: string;
  URLimage: string;
  newsURL: string;
}

const NewsBox: React.FC<NewsProps> = ({title,description,URLimage,newsURL}) => {
  
  return (
    <Box
      sx={{width: 300,Height: 350,backgroundColor: '#1A1D1F',borderRadius:"20px"}} display="flex" flexWrap="wrap" gap={4} p={4} flexDirection="row">       
        <Stack>
        <Box sx={{border:"1px solid transparent", borderRadius:"20px", overflow:"hidden"}}>
            <img width={240} height={200} src={URLimage} alt="random" />
        </Box>
        <Typography sx={{color:"#9CE981"}} fontSize={20} fontWeight="bold">
            {title}..
        </Typography>
        <Typography sx={{fontSize:"16px", color:"whitesmoke", Height:"8vh"}}>
            {description}...
        </Typography>
        
          <Link className="linkstyle" to={newsURL} target="_blank" >
          <Button variant="contained" sx={{ bgcolor:"#2ED480",color:"whitesmoke", marginTop:"20px", width:"100%"}}>
            Follow Link
        </Button>
          </Link>
        </Stack>
    </Box>
  )
}

export default NewsBox