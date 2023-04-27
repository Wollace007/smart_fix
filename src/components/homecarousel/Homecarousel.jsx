import { Card, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { makeStyles } from '@material-ui/core/styles';


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
import { Architecture, Carpenter, CoPresent, Computer, Delete, Diamond, Gavel, Plumbing, WaterDamageOutlined } from '@mui/icons-material';
import repairtools from '../../media/images/top-view-mechanical-tools-arrangement.jpg'
import './home.css'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     height: 200,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

function Homecarousel() {
  // const classes = useStyles();
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

  const data = [
    {
      id: 1,
      title: ' Renovation Services',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/furniture-assembly-worker-standing-reading-instruction-using-tape-measure-worker-tools_482257-24849.jpg?w=826&t=st=1680436669~exp=1680437269~hmac=d320a53381e6a6f821685d530fca0edf05cc8e4fbd57657795fbe37772da09ca'
      , icon: <WaterDamageOutlined />
    },

    {
      id: 2,
      title: ' Web developer ',
      description: ' curabitur et lorem et dolor iaculis  convallis.',
      background: 'https://img.freepik.com/free-photo/african-blogger-waving-audience-while-filming-podcast-air-production-internet-broadcast-host-streaming-live-content-recording-digital-social-media_482257-17276.jpg?w=740&t=st=1680436711~exp=1680437311~hmac=fe550861c11f97e1e94f95722b4d12af35c41a4f510afc21d2e38fb5e3c6d6b0',
      icon: <Computer />
    },

    {
      id: 3,
      title: ' Computer Repair',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?w=826&t=st=1680436763~exp=1680437363~hmac=c56909838cd59c974813c46699972f002f0accc3d64f279dadd99b4f9726b117'
      , icon: <Computer />
    },

    {
      id: 4,
      title: 'Architect',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/architect-engineer-pointing-architectural-building-prototype-analyzing-construction-model-computer-businessman-designer-working-remote-from-home-real-estate-project-modeling-sketch_482257-33964.jpg?w=740&t=st=1680436802~exp=1680437402~hmac=7f4f22393358bb6dd88ede189ccf5d4c0bda8041025f3b5271d58903c5a7a8ae',
      icon: <Architecture />

    },
    {
      id: 5,
      title: ' Project Manegers',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/person-working-building-construction_23-2149184922.jpg?w=740&t=st=1680437454~exp=1680438054~hmac=144ccf5fd9d3d08101bfd0ee83190e2d632b61bafe17e2aa417f15c9ca66d4fd'
      , icon: <Gavel />
    },

    {
      id: 6,
      title: ' Wood Work Experts',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278579.jpg?w=740&t=st=1680437513~exp=1680438113~hmac=bb7f6db9238f2788ebf89b21a4545b8a59239cf40a89f3e63dffc8348670928c'
      , icon: <Carpenter />
    },

    {
      id: 7,
      title: ' Fashion Designer',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/side-view-fashionable-beautiful-woman-shirt-holding-want-buying-elegant-red-dress-brunette-girl-with-long-hair-choosing-look-evening-spanding-time-shoppinh-mall_132075-12219.jpg?w=740&t=st=1680437602~exp=1680438202~hmac=186d7a1972e844c1638c7b43423ed7693327dcae298e1fdc16ea4220d36e4843'
      , icon: <Diamond />
    },

    {
      id: 8,
      title: 'Software Developer',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/free-photo/african-american-young-programmer-wearing-headphone-while-typing-security-codes-business-website-working-rmeote-from-home-employee-programming-software-application-software-screen_482257-28569.jpg?w=740&t=st=1680437727~exp=1680438327~hmac=43dbfa40840061127297bf4f310b2714110f18546685292b7239b5b0b62de79f'
      , icon: <CoPresent />
    },

    {
      id: 9,
      title: ' Plumbing',
      description: ' Curabitur et lorem et dolor iaculis convallis.',
      background: 'https://img.freepik.com/premium-photo/plumber-fixing-white-sink-pipe-with-adjustable-wrench_34936-1945.jpg?w=740'
      , icon: <Plumbing />

    },
  ];
  return (
    <>

      <Carousel responsive={responsive}>
        {data.map((item) => (
          <div style={{
            width: '', height: '250px',
            backgroundImage: `url(${item.background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center', alignItems: 'center', marginRight: '10px'
          }}>
            <div style={{
              width: '60%', background: '#F7F7F7', position: 'absolute', top: '138px',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              border: 'none', flexDirection: "column"
            }}>
              <div className='home-icon'>{item.icon} </div>
              <Typography className='renovation'>
                {item.title}
              </Typography>
              <span style={{ fontSize: "13px", width: '70%', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: "row !important" }}>
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Homecarousel
