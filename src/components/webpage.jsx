import React, { useState, useEffect, useContext, useMemo,useRef} from "react";
import { Grid, Button, Box, Popper, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { createSvgIcon } from '@mui/material/utils';
import { blue } from "@mui/material/colors";
import Avatar from '@mui/material/Avatar';


const WebpageUI = () => {
const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />, 
  'Home',
);
  return (
    <Box >
      <Grid container size={12} sx={{ height: "100vh" }} spacing={2} >
        <Grid size ={2} spacing={8} sx={{ backgroundColor: "#f0f0f0" }}>
                  <Grid size = {9} display={'flex'} direction={'column'} justifyContent={'center'}
            sx ={{
                mt:3,

            }}
            >
                
               <Stack direction="row" spacing={3}>
                   <HomeIcon />
               </Stack>
               <Typography
               sx={
                {
                    color:blue,
                    fontSize:"18px",
                }
               }
               >
                Charts

               </Typography>

            </Grid>
            <Grid size={9} display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{mt:8,}}>
                 <Avatar  sx={{ bgcolor: "#af2222ff" }}>S</Avatar> 
                 <Typography>Name</Typography>
            </Grid>
           
          
        </Grid>
        <Grid size={7} sx={{ backgroundColor: "#dab3b3ff" }}>
            <Grid display={'flex'} justifyContent={'space-between'} direction={'column'}
            
            sx = {{
              
                marginLeft: 2,
                mt: 3,
            }}
            >
                <Typography sx={{  fontSize:"30px",
                color:"#4675f8ff",}}>Hello Sheela</Typography>

            </Grid>
       
        </Grid>
        <Grid size={3} sx={{ backgroundColor: "#dab3b3ff" }}>

        </Grid>
      </Grid>
    </Box>
  );
};

export default WebpageUI;


