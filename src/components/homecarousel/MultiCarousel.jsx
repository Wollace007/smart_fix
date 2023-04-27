import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Add, Computer, FormatQuote, WaterDamage } from '@mui/icons-material';
import { Avatar, Box } from '@mui/material';
import Pict from "../../media/images/hat.jpg";
import mish from "../../media/images/mitchell.jpg";
import manager from "../../media/images/manager.jpg";
import marketing from "../../media/images/marketing manager.jpg";
import account from "../../media/images/accountant.jpg";
// import { makeStyles } from '@mui/styles'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     height: 200,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

const MultiCarousel = () => {
  // const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    {
      id: 1, icon: <Avatar alt="wollace" src={Pict} />,
      title: 'Wollace Macharia', description: "Managing Director",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 2, icon: <Avatar alt="wollace" src={mish} />,
      title: 'Mitchell Naloh', description: "Manager",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 3, icon: <Avatar alt="wollace" src={manager} />,
      title: 'Adit Nayak', description: "Assistant Manager",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 4, icon: <Avatar alt="wollace" src={marketing} />,
      title: 'Minevra Schmidt', description: "Marketing Manager",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 5, icon: <Avatar alt="wollace" src={account} />,
      title: 'Danzel Dawson', description: "Account Manager",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 6, icon: <Avatar alt="wollace" src={Pict} />,
      title: 'Wollace Macharia', description: "Managing Director",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 7, icon: <Avatar alt="wollace" src={Pict} />,
      title: 'Wollace Macharia', description: "Managing Director",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 8, icon: <Avatar alt="wollace" src={Pict} />,
      title: 'Wollace Macharia', description: "Managing Director",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
    {
      id: 9, icon: <Avatar alt="wollace" src={Pict} />,
      title: 'Wollace Macharia', description: "Managing Director",
      quote: "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Etiam vel blandit est. Nulla quam nisi, eleifend a consequat a, commodo at justo."
    },
  ];

  const icons = [Computer, WaterDamage, Add];
  return (
    <>
      <Carousel responsive={responsive}>
        {data.map((item) => (
          <Box key={item.id}>
            <Box style={{ padding: "3rem", display: "flex" }}>
              {item.icon}
              <Box style={{marginLeft:"2rem"}}>
                <Box style={{ fontWeight: "bolder", color: "#fc8f00", }}> {item.title} </Box>
                <Box style={{ fontWeight: "bold" }}> {item.description} </Box>
              </Box>
            </Box>

            <Box>  <FormatQuote /> {item.quote}  <FormatQuote /> </Box>

          </Box>
        ))}
      </Carousel>
      <Box>
      </Box>
    </>
  );

};

export default MultiCarousel;