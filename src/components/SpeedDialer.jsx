import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
    { detail: "", name: '' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  
  function SpeedDialer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <>
       <Box sx={{ height: 130, transform: 'translateZ(0px)', flexGrow: 1,borderStyle: "solid", borderWidth: "2px 2px 2px 2px",
            borderRadius: "5px 5px 5px 5px", borderColor: "#fc8f00" }}>
      {/* <Backdrop open={open} /> */}
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute'}}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="row">
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.detail}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
     
      </SpeedDial>
      
    </Box>
    </>
  )
}

export default SpeedDialer
