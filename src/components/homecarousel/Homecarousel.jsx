import { Card, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import repair from "../../media/images/handyman app bar.jpg";
import cap from "../../media/images/capenter.jpeg";
import web from "../../media/images/Web developer.jpg";
import mec from "../../media/images/mechanic.jpg";
import ele from "../../media/images/man-electrical.jpg";
import plum from "../../media/images/plumber.jpg";
import cleaner from "../../media/images/home cleaner.jpeg";
import ground from "../../media/images/groundsman.jpg";
import shoe from "../../media/images/shoemaker.jpg";
import ac from "../../media/images/ac-installer.png";
import interiordesigner from "../../media/images/interior-designer.jpg";
import { Delete } from '@mui/icons-material';



function Homecarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>

      <Grid container spacing={2} style={{flexGrow:1,display:"flex"}}>
        <Grid item xs={12} >
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={200}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          // ssr={true} // means to render carousel on server-side.
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // autoPlay={this.props.deviceType !== "desktop" ? true : false}
          >
            
            <div style={{position: 'relative'}} > 
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={repair}
              />
              <div  style={{backgroundColor:"red", position: 'absolute'}}>
                step 1
              </div>
              <button
                        type='button'
                        style={{
                          position: 'absolute', border: 'none', borderRadius: '50px', padding: '0.2rem', right: '0.75rem', bottom: '0.75rem',
                          backgroundColor: 'rgb(239 68 68)', fontSize: '1.25rem', lineHeight: '1.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center'
                        }}
                      // onClick={deleteImage}
                      >
                        <Delete className='text-white' />
                      </button>
            </div>
            <Box>
              <img
                 style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={mec}
              />
            </Box>
            <Box>
           
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={plum}
              />
            
            </Box>
            
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={ele}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={cap}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={web}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={cleaner}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={ground}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={shoe}
              />
              </Box>
              <Box>
              <img
                style={{ height: "50vh", width: "50vh",objectFit:"cover" }}
                alt="logo"
                src={ac}
              />
              </Box>
              <Box>
              <img
                style={{ height: "40vh", width: "40vh",objectFit:"cover" }}
                alt="logo"
                src={interiordesigner}
              />
              </Box>
            
          </Carousel>
        </Grid>
      </Grid>

    </>
  )
}

export default Homecarousel
