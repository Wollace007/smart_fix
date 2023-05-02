import { Add, Bolt, ChevronRight, Construction, ContentPasteSearch, Cottage, DoneOutline, EditCalendar, Engineering, MilitaryTech, Phone, PhoneInTalk, Quickreply, SupportAgent, Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Divider, Grid, IconButton, InputAdornment, MenuItem, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
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
import toolsonwood from '../media/images/toolsonwood.jpg';
import plumbersmile from '../media/images/plumberwithwrench.jpg';
import handshakes from '../media/images/shakinghands.jpg';
import Youtuber from '../components/Youtube/Youtuber';
import MultiCarousel from '../components/homecarousel/MultiCarousel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Footer from '../components/Footer';

const ariaLabel = { 'aria-label': 'description' };

const service = [
  {
    value: 'electricity',
    label: 'Electrical Repair',
  },
  {
    value: 'home',
    label: 'Home Repair',
  },
  {
    value: 'plumber',
    label: 'Plumbing repair',
  },
  {
    value: 'renovation',
    label: 'Building Renovation',
  },
];


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
        <Card style={{ flexGrow: 1, marginTop: "12rem", backgroundColor: "#08011D", padding: "2rem" }}>
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
            <Box style={{ display: "flex" }}>
              <Box style={{ display: "flex" }}>
                <span className='stepsIcon'> <Bolt fontSize="large" fontWeight="bolder" /> </span>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                <span className='offer' style={{ fontWeight: "bold", fontSize: "1.4rem" }}> Fast Reliable Service</span>
                <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
              </Box>
            </Box>

            <Box style={{ marginTop: "3rem" }}>
              <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                <Box style={{ display: "flex" }}>
                  <span className='stepsIcon'> <PhoneInTalk fontSize="large" fontWeight="bolder" /> </span>
                </Box>
                <Box style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                  <span className='offer' style={{ fontWeight: "bold", fontSize: "1.4rem" }}> Emergency Service</span>
                  <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                <Box style={{ display: "flex" }}>
                  <span className='stepsIcon'> <Engineering fontSize="large" fontWeight="bolder" /> </span>
                </Box>
                <Box style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                  <span className='offer' style={{ fontWeight: "bold", fontSize: "1.4rem" }}> Skill & Trained Personel</span>
                  <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
                </Box>
              </Box>
            </Box>
            <Box style={{ marginTop: "3rem" }}>
              <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                <Box style={{ display: "flex" }}>
                  <span className='stepsIcon'> <Cottage fontSize="large" fontWeight="bolder" /> </span>
                </Box>
                <Box style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                  <span className='offer' style={{ fontWeight: "bold", fontSize: "1.4rem" }}> 1 Year Warranty</span>
                  <span>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed eiusmod tempor incididunt.</span>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: '10rem', padding: '0px 3rem' }}>
        <Grid item xs={6}>
          <Youtuber />
        </Grid>
        <Grid item xs={6}>
          <Box style={{ color: "#fc8f00" }}>
            Fix It Yourself
          </Box>
          <Box style={{ fontSize: "3rem", fontWeight: "bolder" }}>
            Quick Tips & Trick
          </Box>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" size="small" style={{
              borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
              borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", color: "#000000", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between"
            }}>
              What System is Right For Me?
              <InputAdornment position="end">
                <IconButton>
                  <Add />
                </IconButton>
              </InputAdornment>
            </Button>
            <span>Fringilla neque iaculis ut. Suspendisse quis justo nec nisi porta commodo mattis a dui.
              Praesent sagittis nunc elit. Donec sed diam consequat egestas.</span>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" size="small" style={{
              borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
              borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", color: "#000000", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between"
            }}>
              How much will it cost?
              <InputAdornment position="end">
                <IconButton>
                  <Add />
                </IconButton>
              </InputAdornment>
            </Button>
            <span>Fringilla neque iaculis ut. Suspendisse quis justo nec nisi porta commodo mattis a dui.
              Praesent sagittis nunc elit. Donec sed diam consequat egestas.</span>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" size="small" style={{
              borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
              borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00", color: "#000000", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between"
            }}>
              Simple steps for home renovation?
              <InputAdornment position="end">
                <IconButton>
                  <Add />
                </IconButton>
              </InputAdornment>
            </Button>
            <span>Fringilla neque iaculis ut. Suspendisse quis justo nec nisi porta commodo mattis a dui.
              Praesent sagittis nunc elit. Donec sed diam consequat egestas.</span>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box style={{
            backgroundImage: `url(${handshakes})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "90vh"
          }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box style={{ margin: "4rem" }}>
                  <Box style={{ color: "#fc8f00", fontSize: "2rem", fontWeight: "bolder" }}>Customer say</Box>
                  <Box style={{ fontSize: "3rem", fontWeight: "bold", color: "#FFFFFF" }}>We Are Trusted 15+ Countries Worldwide</Box>
                  <Box>
                    <Button variant="contained" size="large" style={{ backgroundColor: "#fc8f00", padding: "10px 41px" }}>
                      VIEW ALL REVIEWS
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <MultiCarousel />
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

      </Grid>

      <Grid container spacing={2} style={{ flexGrow: 1, marginTop: '4rem' }}>
        <Grid item xs={12}>
          <Box style={{ color: "#fc8f00", display: "flex", justifyContent: "center", alignItems: "center" }}> Our Pricing & Plans</Box>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ fontSize: "2rem", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}> Best Maintenance Plans</Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ padding: "10px 20px 10px 20px", borderRadius: "5px 5px 0px 0px", width: "100px", height: "40px", backgroundColor: "#fc8f00" }}>
              <Typography style={{ fontSize: "1.0rem", color: "#FFFFFF", fontWeight: "bolder" }}> 24% Off</Typography>
            </div>
          </Box>
          <Card style={{ flexDirection: "row", display: "flex" }} >
            <Box style={{ margin: "2rem" }}>
              <Box>
                <Construction sx={{ fontSize: 80, color: "#fc8f00" }} />
              </Box>
              <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Commercial</Box>
              <Box style={{ fontSize: "2rem", fontWeight: "bolder" }}>$115</Box>
            </Box>
            <div style={{ borderLeft: "3px solid grey", height: "200px", margin: "1rem" }} />
            <Box style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Monthly Inspection</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Maintenance</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> General Repair</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Fixing Faulty Ring</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Electrical Repair</span>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ padding: "10px 20px 10px 20px", borderRadius: "5px 5px 0px 0px", width: "100px", height: "40px", backgroundColor: "#fc8f00" }}>
              <Typography style={{ fontSize: "1.0rem", color: "#FFFFFF", fontWeight: "bolder" }}> 24% Off</Typography>
            </div>
          </Box>
          <Card style={{ flexDirection: "row", display: "flex" }} >
            <Box style={{ margin: "2rem" }}>
              <Box>
                <Engineering sx={{ fontSize: 80, color: "#fc8f00" }} />
              </Box>
              <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Residential</Box>
              <Box style={{ fontSize: "2rem", fontWeight: "bolder" }}>$175</Box>
            </Box>
            <div style={{ borderLeft: "3px solid grey", height: "200px", margin: "1rem" }} />
            <Box style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Monthly Inspection</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Maintenance</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> General Repair</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Fixing Faulty Ring</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}><DoneOutline style={{ color: "#fc8f00" }} /> Electrical Repair</span>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>Fusce elementum pretium odio eu hendrerit.
            Donec eu malesuada libero.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button variant="contained" size="large" style={{ backgroundColor: "#fc8f00", padding: "10px 41px" }}>
              VIEW ALL PRICING
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
        <Grid item xs={12}>
          <Box style={{
            backgroundImage: `url(${toolsonwood})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "50vh"
          }}>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "5rem" }}>
              <Box style={{ fontSize: "1.5rem", fontWeight: "bolder", color: "#fc8f00" }}>Don't Know What To Start With?</Box>
              <Box style={{ fontSize: "2.5rem", fontWeight: "bolder", color: "#ffffff" }}>Get A Solutions For All Handyman Services</Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ padding: "3rem" }}>
        <Grid item xs={6}>
          <Box style={{
            backgroundImage: `url(${plumbersmile})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh"
          }}>
            <Paper elevation={0} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", flexDirection: "row", position: "absolute", marginY: "30rem" }}>
              <Box> <SupportAgent sx={{ fontSize: 90, color: "#fc8f00" }} /> </Box>
              <Box style={{ flexDirection: "column" }}>
                <Box sx={{ fontSize: 24, color: "#fc8f00", fontWeight: "bolder" }}>Need a service & ready to book?</Box>
                <Box style={{ fontSize: "1.3rem", fontWeight: "bolder" }} >Call Us : +254 705 360 942 </Box>
              </Box>

            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Box style={{ fontSize: "1.3rem", fontWeight: "bolder", color: "#fc8f00" }}>Free Consultation</Box>
            <Box sx={{ fontSize: "2.8rem", fontWeight: "bolder" }}>Get A Free Quote</Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField id="outlined-basic" fullWidth label="Full Name" variant="outlined" placeholder="Full Name" inputProps={ariaLabel} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" fullWidth label="E-mail" variant="outlined" placeholder="Email Address" inputProps={ariaLabel} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" fullWidth label="Telephone" variant="outlined" placeholder="Telephone Number" inputProps={ariaLabel} />
            </Grid>
            <Grid item xs={6} >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Enter Date" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-service"
                select
                label="Select Service"
                defaultValue=""
                helperText="Please select your service"
                fullWidth
              >
                {service.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Message"
                style={{ width: 600 }}
              />
            </Grid>
            <Box style={{ marginLeft: "1rem" }}>
              <Button variant="contained" size="small" fullWidth style={{ backgroundColor: "#fc8f00", padding: "8px 230px", display: "flex", alignItems: "flex-start" }}>
                GET A FREE QUOTE
              </Button>
            </Box>

          </Grid>
        </Grid>
      </Grid>

      <Card style={{ backgroundColor: "#e0f7fa", padding: "3rem", flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box style={{ display: "flex", flexDirection: "row", }}>
              <Box> <Quickreply sx={{ color: "#fc8f00", fontSize: 70 }} /></Box>
              <Box style={{ flexDirection: "column", display: "flex",marginLeft:"2rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: "bolder" }}>Subscribe Our Newsletter</span>
                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" placeholder="Email Address" inputProps={ariaLabel} />
              <Button variant="contained" size="small" style={{ backgroundColor: "#fc8f00", padding: "10px 25px" }}>
                SUBSCRIBE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2}>
  <Grid item xs={12}>
    <Footer/>
  </Grid>
</Grid>

    </>
  )
}

export default Home
