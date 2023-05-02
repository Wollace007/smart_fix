import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import closehandymanimage from '../media/images/closehandyman.jpg'
import repaire from  '../media/images/repairingelectricalbox.jpg'
import LinearProgress from '../components/LinearProgressbar'
function About() {
    return (
        <>
            <Box style={{
                flexGrow: 1, backgroundImage: `url(${closehandymanimage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "75vh"
            }}>
                <Navbar />
                <Box style={{ display: "flex", justifyContent: "space-between", margin: "1rem",padding:"4rem" }}>
                    <span style={{ fontSize: "3rem", fontWeight: "bolder" }}> About </span>
                    <span style={{ fontSize: "2rem", fontWeight: "bolder" }}> <span style={{color:"#fc8f00",fontWeight:"bolder"}}>Home/</span>About </span>
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Box style={{
                flexGrow: 1, backgroundImage: `url(${repaire})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",margin: "4rem",display:"flex",justifyContent:"flex-start",alignItems:"center"
            }}>
                <Card> 
                    <Box>
                        <Box style={{color:"#fc8f00",fontSize:"2rem",fontWeight:"bold"}}>We Build For Your Comfort </Box>
                        <Box style={{fontSize:"1.5rem",fontweight:"bold"}}> Call : +254 705 360 942</Box>
                    </Box>
                </Card>
            </Box>
                </Grid>
                <Grid item xs={6}>
<Box style={{margin:"3rem"}}>
    <Box style={{color:"#fc8f00",fontSize:"1.5rem",fontWeight:"bold"}}>What About Us</Box>
    <Box style={{fontSize:"2.3rem",fontWeight:"bolder"}}>53 Years Of Experience Handyman Service</Box>
    <Box>Vitech caonsectetur adipiscing elit. Donec a feugiat purus. 
        Duis turpis nunc, aliquam id nunc ac, convallis dictum nisi.
        Curabitur vehicula tincidunt sapien, vel fringilla neque iaculis.</Box>
        <Box> <LinearProgress/> </Box>
</Box>
                </Grid>
            </Grid>
        </>
    )
}

export default About
