import { Add } from '@mui/icons-material';
import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';
function Animatednumbers() {
  return (
    <>
 <Grid container spacing={2} style={{display:"flex",justifyContent:"center"}}>
    <Grid item xs={6}>
    <CountUp start={0} end={2456} delay={1}>
  {({ countUpRef }) => (
    <Box style={{flexDirection:"column"}}>
      <span ref={countUpRef} style={{color:"#fc8f00",fontSize:"2rem",fontWeight:"bolder"}}>
      </span>
      <Add style={{color:"#fff",fontSize:"2rem"}}/>
      <Typography style={{color:"#fff",fontSize:"1.2rem",display:"flex",justifyContent:"flex-start"}}> Clients Satisfied With Our Services</Typography>
    </Box>
  )}
</CountUp>
    </Grid>
    <Divider style={{border:"#fff"}} />
    <Grid item xs={6}>
    <CountUp start={0} end={3214} delay={1}>
  {({ countUpRef }) => (
    <Box style={{flexDirection:"column"}}>
      <span ref={countUpRef} style={{color:"#fc8f00",fontSize:"2rem",fontWeight:"bolder"}}> </span> 
      <Add style={{color:"#fff",fontSize:"2rem"}}/>
      <Typography style={{color:"#fff",fontSize:"1.2rem",display:"flex",justifyContent:"flex-start"}}> Project Completed By Our Service</Typography>
    </Box>
  )}
</CountUp>
    </Grid>
  </Grid>

    </>
  )
}

export default Animatednumbers
