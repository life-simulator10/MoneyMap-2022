import { Typography, Box, Stack } from "@mui/material";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "react-router-dom";
import {
    ChatBubble,
    Delete,
    Edit,
    Phone,
    Place,
    Star,
} from "@mui/icons-material";

const PostDetails = () => {
    const navigate = useNavigate();
    const {data:user} = useGetIdentity();
    const {id} = useParams();
    const {mutate} = useDelete();
    const { queryResult } = useShow();

    const { data,isLoading, isError} = queryResult;

    const postDetails = data?.data?? {};

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>
  return (
    <Box borderRadius="15px" padding="20px"  bgcolor="#1A1D1F" width="fit-content" mx="auto" >

      <Typography fontSize={25} fontWeight={700} color="#FCFCFC">Details</Typography>
      <Box mt="20px" display="flex" flexDirection={{xs:"column", lg:"row"}} gap={4}>
        <Box>
          <img src={postDetails.photo} alt={postDetails.title} height={546} style={{ objectFit:"cover", borderRadius:"10px"}} className="post_details-img"/>
          <Box mt="15px">
            <Stack>
              <Typography fontSize={18} fontWeight={900} color="#9CE981" textTransform="capitalize" letterSpacing={0.3}>{postDetails.title}</Typography>
              <Typography fontSize={18} fontWeight={500} color="#FCFCFC" textTransform="capitalize" mt={2} letterSpacing={0.3}>{postDetails.description}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default PostDetails