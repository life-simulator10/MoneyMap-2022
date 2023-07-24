import React from 'react'
import {Link} from "@pankod/refine-react-router-v6";
import { Typography,Box,Card, CardMedia, CardContent, Stack} from "@pankod/refine-mui";

import { PostCardProps } from 'interfaces/post';

const PostCard = ({id,title,description,photo}: PostCardProps) => {
  return (
    <Card component={Link} to={`/posts/show/${id}`}
    sx={{maxWidth:"300px",minHeight:"350px", padding:"20px",
    "&:hover":{
      boxShadow:"0 22px 45px 2px rgba(123,176,176,0.1)"
    }, cursor:"pointer", bgcolor:"#1A1D1F"
  }}
  elevation={0}
    >
      <CardMedia component="img" width="100%" height={210} image={photo} alt="card image" sx={{borderRadius:"10px"}}/>
      <CardContent sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"0px"}}>
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#9CE981" >{title.slice(0,40)}...</Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Typography fontSize={14} color="#FCFCFC">{description.slice(0,70)}...</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PostCard