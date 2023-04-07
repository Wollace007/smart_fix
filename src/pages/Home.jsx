import { Add, ChevronRight, Phone } from '@mui/icons-material';
import { Box, Button, Card, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import '../components/home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import handymanimage from '../media/images/happy-young-man.jpg'
import repairtools from '../media/images/top-view-mechanical-tools-arrangement.jpg'
import Homecarousel from '../components/homecarousel/Homecarousel';
import Animatednumbers from '../components/Animatednumbers';
function Home() {

  return (
    <>
      <Box style={{
        flexGrow: 1, backgroundImage: `url(${handymanimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
      }}>
        <Navbar />
        <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Grid item xs={6} style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
            <Box sx={{ mr: 2, fontSize: "2.5rem", fontWeight: "bolder", color: "#fff" }}>24x7</Box>
            <Box sx={{ fontSize: "2rem", fontWeight: "bolder", color: "#fff" }}>
              <Box>Handyman</Box>
              <Box>Services</Box>
            </Box>
          </Grid>
          <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
            <span style={{ fontSize: "4rem", fontWeight: "bolder", color: "#fff" }}>Trusted</span>
            <div className='type'>
              <Typewriter
                options={{
                  strings: ['Handyman'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <span style={{ fontSize: "4rem", fontWeight: "bolder", color: "#fff" }}>Services</span>
          </Grid>
          <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ color: "#fff", fontSize: "1.2rem" }}>HAVE AN ISSUE?</div>
            <div className="call">CALL 24HOUR EMERGENCY SERVICE</div>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "2rem" }}>
            <Box>
              <Button variant="contained" size="large" style={{ backgroundColor: "#fc8f00", padding: "1px 80px", borderRadius: "10px" }}>
                <Phone sx={{ fontSize: 40 }} />
                <span style={{ display: "flex", justifyContent: "flex-start", fontSize: "2rem" }}>0705360942</span>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Card style={{ flexGrow: 1, marginTop: "6rem", backgroundColor: "#08011D", padding: "2rem" }}>
          <Grid container spacing={2} >
            <Grid item xs={6}>
              <Box sx={{ fontWeight: "bolder", color: "#fff" }}>
                <div style={{ color: "#fc8f00", fontSize: "1rem", marginLeft: "3rem" }}>Free Request</div>
                <div style={{ fontSize: "2.5rem", marginLeft: "3rem" }}>Request Services</div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <span style={{ color: "#fc8f00" }}>Full Name</span>
                  <Paper>
                    <TextField id="filled-basic" label="Your name" variant="filled" />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <span style={{ color: "#fc8f00" }}>Telephone</span>
                  <Paper>
                    <TextField id="filled-basic" label="Phone number" variant="filled" />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <span style={{ color: "#fc8f00" }}>Send</span>
                  <Paper style={{ padding: "1px" }}>
                    <Button variant="contained" size="large" style={{ backgroundColor: "#fc8f00", padding: "0px 41px" }}>
                      SEND REQUEST
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Box sx={{ mt: 15, flexGrow: 1, p: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card style={{
              backgroundImage: `url(${repairtools})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: "50vh",

              display: "flex",
              justifyContent: "flex start",
              alignItems: "center"
            }} >
              <Box style={{ marginLeft: "4rem" }}>
                <Box sx={{ color: "#fc8f00", fontWeight: "bolder", fontSize: "1.1rem" }}>Who Are We </Box>
                <Box sx={{ color: "#fff", fontWeight: "bolder", fontSize: "2rem" }}>All Types Of Repair </Box>
                <Box sx={{ color: "#fff", fontWeight: "bolder", fontSize: "2rem" }}>Service Provide </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <span style={{ fontSize: "2rem", fontWeight: "bolder", color: "#000" }}>Our Successful History</span>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>
                  Donec feugiat lectus mi, nec sceleris quassa viverra ac.
                  Vivamus vestibulum ornareim perdiet.
                  Nam et sagittis diam.
                  Maecenas maximus fringilla viverra sagittis.
                </Typography>

                <Link
                  className='linq'
                  href="/"
                  target="_blank"
                  variant="body2"

                >
                  <span style={{ display: "flex", justifyContent: "flex-start" }}>Read More <ChevronRight /> </span>
                </Link>

              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Donec feugiat lectus mi, nec sceleris quassa viverra ac.
                  Vivamus vestibulum ornareim perdiet.
                  Nam et sagittis diam.
                  Maecenas maximus fringilla viverra sagittis.
                </Typography>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Homecarousel />
          </Grid>
          <Grid item xs={6} style={{ display: "flex", flexDirection: "row", alignItems: 'center', marginTop: "3rem" }}>
            <Box className='gradient-color' style={{ marginRight: "2", fontSize: "2.5rem", fontWeight: "bolder" }}>
              1990
            </Box>
            <Box>
              <Box sx={{ fontSize: "1.2rem", fontWeight: "bolder", color: "#fc8f00" }}>53 Years of Experience </Box>
              <Box sx={{ fontSize: "2rem", fontWeight: "bolder", color: "#000000" }}>Success Experiences</Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ backgroundColor: "#08011D" }}>
              <Box> <Animatednumbers/> </Box>
              <Box> step 2 </Box>
              <Divider />
              <Box> step 1 </Box>
              <Box> step 2 </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
