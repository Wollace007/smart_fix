import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { Add, Computer, WaterDamage } from '@mui/icons-material';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const MultiCarousel = () => {
  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    { id: 1, title: 'Item 1' ,icon: '<add/>'},
    { id: 2, title: 'Item 2',icon: '<Computer/>' },
    { id: 3, title: 'Item 3',icon: '<add/>'},
    { id: 4, title: 'Item 4' ,icon: '<add/>'},
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
  ];

  const icons = [Computer, WaterDamage,Add];
  return (
    <>
    <Carousel responsive={responsive}>
      {data.map((item) => (
        <Paper key={item.id} className={classes.paper}>
          <Typography variant="h5" component="h2">
            {item.title}
            {item.icon}
          </Typography>
          <ul>
      {icons.map((Icon, i) => (
         <li key={i}>
            <Icon/>
            
         </li>
      ))}
   </ul>
        </Paper>
      ))}
    </Carousel>
    <Box>
     <Typography style={{
      fontSize: 20,
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      webkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}> 2000 </Typography>
</Box>
</>
  );
  
};

export default MultiCarousel;