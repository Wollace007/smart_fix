import { Add, Bolt, ChevronRight, ContentPasteSearch, Cottage, EditCalendar, Engineering, MilitaryTech, Phone, PhoneInTalk } from '@mui/icons-material';
import { Box, Button, Card, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import '../components/home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import handymanimage from '../media/images/happy-young-man.jpg'
import repairtools from '../media/images/top-view-mechanical-tools-arrangement.jpg'
import Wark from '../media/images/work.jpg'
import Homecarousel from '../components/homecarousel/Homecarousel';
import Animatednumbers from '../components/Animatednumbers';
import Wrench from '../media/images/wrench.jpg';
import electrician from '../media/images/repairingelectrical.jpg';
import doorrepair from '../media/images/installeddoorlocker.jpg';
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
            <Card sx={{ flexGrow: 1, padding: "4rem", backgroundColor: "#08011D", marginTop: "2rem" }}>
              <Animatednumbers />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ flexGrow: 1, backgroundColor: "#F2F2F8" }}>

        <Grid item xs={12} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fc8f00" }}>How it works</span>
          <span style={{ fontWeight: "bold", fontSize: "2.4rem" }}> Follow 4 Easy Steps</span>
        </Grid>
      </Box>
      <Grid container spacing={2} style={{ flexGrow: 1, padding: "3rem", display: "flex", justifyContent: "center", backgroundColor: "#F2F2F8" }}>
        <Grid item xs={2}>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "4rem" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-no-1.png" />
          </div>
          <div className='steps' style={{
            borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
            borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", padding: "2rem"
          }}>
            <span className='stepsIcon' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <EditCalendar style={{ fontSize: "50px" }} />
            </span>
          </div>
          <span className='steps'> Schedule your Experience</span>
          <Typography style={{ color: '#000000', textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
        </Grid>
        <Box style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
          <img style={{ width: "100px", height: "100px" }}
            src="https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-arrow-1-e1616025617515.png" />
        </Box>
        <Grid item xs={2}>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "4rem" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-no-2.png" />
          </div>
          <div className='steps' style={{
            borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
            borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", padding: "2rem"
          }}>
            <span className='stepsIcon' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ContentPasteSearch style={{ fontSize: "50px" }} />
            </span>
          </div>
          <span className='steps'> Get Professional Advices</span>
          <Typography style={{ color: '#000000', textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
        </Grid>
        <Box style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
          <img style={{ width: "100px", height: "100px" }}
            src="	https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-arrow-1-e1616025617515.png" />
        </Box>
        <Grid item xs={2}>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "4rem" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-no-3.png" />
          </div>
          <div className='steps' style={{
            borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
            borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", padding: "2rem"
          }}>
            <span className='stepsIcon' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Engineering style={{ fontSize: "50px" }} />
            </span>
          </div>
          <span className='steps'> Meet Handyman Expert</span>
          <Typography style={{ color: '#000000', textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
        </Grid>
        <Box style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
          <img style={{ width: "100px", height: "100px" }}
            src="	https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-arrow-1-e1616025617515.png" />
        </Box>
        <Grid item xs={2}>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "4rem" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://templatekit.jegtheme.com/fixn/wp-content/uploads/sites/55/2021/03/fixn-no-4.png" />
          </div>
          <div className='steps' style={{
            borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
            borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", padding: "2rem"
          }}>
            <span className='stepsIcon' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <MilitaryTech style={{ fontSize: "50px" }} />
            </span>
          </div>
          <span className='steps'> Get A Best Our Services</span>
          <Typography style={{ color: '#000000', textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{
            display: "flex", justifyContent: "center",
            backgroundImage: `url(${Wark})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh"
          }}>
            <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <span style={{ color: "#FFA400", display: "flex", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bolder" }}>
                Interested In An Estimate?
              </span>
              <Typography variant="h3" component="h2" style={{ color: "#FFFFFF", display: "flex", justifyContent: "center", fontWeight: "bold" }}>
                Get Started With Your Free Estimate
              </Typography>
              <span style={{ color: "#ffffff", textAlign: "center", fontWeight: "bold" }}>
                Donec feugiat lectus mi, nec scelerisque massa viverra ac. Vivamus vestibulum ornare imperdiet.
                Nam et sagittis diam. Maecenas maximus fringilla viverra.
              </span>
              <Box style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <Button variant="contained" size="small" style={{ backgroundColor: "#fc8f00", padding: "12px 100px" }}>
                  REQUEST ESTIMATE
                </Button>
              </Box>
            </Box>
          </Card>
          <Paper elevation={0} style={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: "2rem" }}>
              <Grid item xs={4}>
                <div style={{
                  backgroundImage: `url(${Wrench})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: "35vh"
                }}>
                  <Box style={{ padding: "2rem" }}>
                    <span style={{ color: "#fc8f00", fontWeight: "bold", fontSize: "1rem" }}>Special Offer</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem", display: "flex" }}>  Faucet Installation</span>
                    <span className='specialOffer'>$24</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem" }}>off</span>
                    <Link
                      className='linq'
                      href="/"
                      target="_blank"
                      variant="body2"
                    >
                      <span style={{ display: "flex", justifyContent: "flex-start", fontWeight: "bold", fontSize: "1rem" }}>Contact Us<ChevronRight /> </span>
                    </Link>

                  </Box>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div style={{
                  backgroundImage: `url(${electrician})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: "35vh"
                }}>
                  <Box style={{ padding: "2rem" }}>
                    <span style={{ color: "#fc8f00", fontWeight: "bold", fontSize: "1rem" }}>Special Offer</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem", display: "flex" }}>  Electrical Repair</span>
                    <span className='specialOffer'>$24</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem" }}>off</span>
                    <Link
                      className='linq'
                      href="/"
                      target="_blank"
                      variant="body2"
                    >
                      <span style={{ display: "flex", justifyContent: "flex-start", fontWeight: "bold", fontSize: "1rem" }}>Contact Us<ChevronRight /> </span>
                    </Link>

                  </Box>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div style={{
                  backgroundImage: `url(${doorrepair})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: "35vh"
                }}>
                  <Box style={{ padding: "2rem" }}>
                    <span style={{ color: "#fc8f00", fontWeight: "bold", fontSize: "1rem" }}>Special Offer</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem", display: "flex" }}>  Renovation Service</span>
                    <span className='specialOffer'>$24</span>
                    <span style={{ fontWeight: "bold", fontSize: "2rem" }}>off</span>
                    <Link
                      className='linq'
                      href="/"
                      target="_blank"
                      variant="body2"
                    >
                      <span style={{ display: "flex", justifyContent: "flex-start", fontWeight: "bold", fontSize: "1rem" }}>Contact Us<ChevronRight /> </span>
                    </Link>

                  </Box>
                </div>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Box style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fc8f00", fontSize: "1.3rem" }}>What We Offer</span>
            <span style={{ fontWeight: "bold", fontSize: "2rem" }}>Available for 24/7 Emergency Service</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel dignissim lectus. Pellentesque et scelerisque.
              Sedvel ipsum auctor, iaculis arcu quis, posuere dui.
            </span>
          </Box>
        </Grid>
        <Grid item xs={8} style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={6}>
            <Box style={{display:"flex"}}>
              <Box style={{display:"flex"}}>
              <span className='stepsIcon'> <Bolt fontSize="large" fontWeight="bolder"/> </span>
              </Box>
              <Box style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
              <span className='offer' style={{fontWeight:"bold",fontSize:"1.4rem"}}> Fast Reliable Service</span>
              <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
              </Box>
            </Box>

            <Box style={{marginTop:"3rem"}}>
            <Box style={{display:"flex",justifyContent:"flex-start"}}>
              <Box style={{display:"flex"}}>
              <span   className='stepsIcon'> <PhoneInTalk fontSize="large" fontWeight="bolder"/> </span>
              </Box>
              <Box style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
              <span className='offer' style={{fontWeight:"bold",fontSize:"1.4rem"}}> Emergency Service</span>
              <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
              </Box>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
            <Box style={{display:"flex",justifyContent:"flex-start"}}>
              <Box style={{display:"flex"}}>
              <span   className='stepsIcon'> <Engineering fontSize="large" fontWeight="bolder"/> </span>
              </Box>
              <Box style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
              <span className='offer' style={{fontWeight:"bold",fontSize:"1.4rem"}}> Skill & Trained Personel</span>
              <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
              </Box>
            </Box>
              </Box>
            <Box style={{marginTop:"3rem"}}>
            <Box style={{display:"flex",justifyContent:"flex-start"}}>
              <Box style={{display:"flex"}}>
              <span   className='stepsIcon'> <Cottage fontSize="large" fontWeight="bolder"/> </span>
              </Box>
              <Box style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
              <span className='offer' style={{fontWeight:"bold",fontSize:"1.4rem"}}> 1 Year Warranty</span>
              <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
              </Box>
            </Box>
              </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
  <Grid item xs={6}>
    step 1
  </Grid>
  <Grid item xs={6}>
   step 2
  </Grid>
</Grid>
    </>
  )
}

export default Home
