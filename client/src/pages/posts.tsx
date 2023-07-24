import { Add } from "@mui/icons-material";
import { Box,Stack,Typography, TextField, Select, MenuItem } from "@pankod/refine-mui";
import { useTable } from "@pankod/refine-core";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PostCard,CustomButton } from "components";
import { useMemo } from "react";

const Posts = () => {
  const navigate = useNavigate();
  const {
    tableQueryResult: {data, isLoading, isError},
    current, setCurrent, setPageSize, pageCount,sorter,setSorter, filters,setFilters
  } = useTable();
  const allPosts = data?.data?? [];

  const currentFilterValues = useMemo(()=> {
    const logicalFilters = filters.flatMap((item)=>
    ("field" in item?item: []));
    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
    }
  },[filters])

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>
  return (
    <Box>
      <Box mt="20px" sx={{display:"flex", flexWrap:"wrap", gap:3}}>
          <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#FCFCFC">
            {!allPosts.length?"There are no Posts to show":"Articles"}
          </Typography>
          <Box mb={2} mt={3} display="flex" width="84%" justifyContent="space-between" flexWrap="wrap">
            <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs:"20px", sm:0}} justifyContent="space-around">
                <TextField style={{backgroundColor:"#2A2F33", borderRadius:"10px"}} variant="outlined" color="info" placeholder="Search By title" value={currentFilterValues.title} onChange={(e)=>{ setFilters([{field:"title", operator:"contains", value: e.currentTarget.value? e.currentTarget.value : undefined}])}}/>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <CustomButton title="Add Articles" handleClick={()=>navigate("/posts/create")} backgroundColor="#2ED480" color="#fcfcfc" icon={<Add/>} />
                </Stack>
            </Box>
          </Box>
          </Stack>
      </Box>
        

        <Box mt="20px" sx={{display:"flex", flexwrap:"wrap", gap:3}}>
          {
            allPosts.map((post) =>(
              <PostCard key={post._id} id={post._id} title={post.title} description={post.description} photo={post.photo} />
            ))
          }
        </Box>

        {
          allPosts.length > 0 &&(
            <Box display="flex" gap={2} mt={3} flexWrap="wrap" justifyContent="space-between">
                <CustomButton title="Previous" handleClick={()=> setCurrent((prev)=> prev-1)} backgroundColor="grey" color="white" disabled={!(current>1)}/>
                <Box display={{xs:"hidden", sm:"flex"}} sx={{color:"white"}} alignItems="center" gap="5px">
                  Page{' '}<strong>{current} of {pageCount}</strong>
                </Box>
                <CustomButton title="Next" handleClick={()=> setCurrent((prev)=> prev+1)} backgroundColor="grey" color="white" disabled={current === pageCount}/>
                <Select variant="outlined" color="info" displayEmpty inputProps={{"aria-label":"Without label"}} defaultValue={3} onChange={(e)=> setPageSize(e.target.value? Number(e.target.value):3)} sx={{marginRight:"auto", border:"2px solid #2BC176"}}>
                {[3, 6, 9, 12, 15].map((size) => (
                            <MenuItem key={size} value={size}>
                                Show {size}
                            </MenuItem>
                        ))}
                </Select>
            </Box>
          )
        }
    </Box>
  )
}

export default Posts