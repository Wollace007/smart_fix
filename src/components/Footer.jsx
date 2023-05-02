import { AccessTime, Email, Facebook, Handyman, Instagram, LinkedIn, LocationOn, PhoneInTalk, Twitter } from '@mui/icons-material'
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const footItems = ["privacy", "Terms & conditions", "FAQ", "Help", "Blog"];

function Footer() {
    return (
        <>
            <footer style={{ flexGrow: 1, backgroundColor: "#0B0F1E" }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
                            <span style={{ color: "#fc8f00", fontSize: "2rem", fontWeight: "bolder" }}>About </span>
                            <span style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "bold" }}>Lorem ipsum dolor sit amet consect turadipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo elit luctus. </span>
                            <Box>
                                <a href="https://www.facebook.com" target="_blank">
                                    <Facebook fontSize="large" style={{ color: "fc8f00" }} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank">
                                    <Twitter fontSize="large" style={{ color: "fc8f00" }} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank">
                                    <Instagram fontSize="large" style={{ color: "fc8f00" }} />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank">
                                    <LinkedIn fontSize="large" style={{ color: "fc8f00" }} />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
                            <span style={{ color: "#fc8f00", fontSize: "2rem", fontWeight: "bolder" }}>Quick Links </span>
                            <Box sx={{ display: { xs: "none", sm: "contents" } }}>
                                {footItems.map((item) => (
                                    <Button className="footerlinks" key={item} sx={{ color: "white" }} href="/" target="_blank">
                                        {item}

                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
                            <span style={{ color: "#fc8f00", fontSize: "2rem", fontWeight: "bolder" }}>Contact Info </span>
                            <Box style={{ display: "flex", flexDirection: "column" }}>
                                <span> <LocationOn style={{ color: "#fc8f00" }} /> <span className='footerlinks'>The Hub,Karen,Ngong Road</span> </span>
                                <span> <PhoneInTalk style={{ color: "#fc8f00" }} /> <span className='footerlinks'> +254 705 360 942       </span> </span>
                                <span> <Email style={{ color: "#fc8f00" }} /> <span className='footerlinks'>@wollacemaina2@gmail.com</span> </span>
                                <span> <AccessTime style={{ color: "#fc8f00" }} /> <span className='footerlinks'>Mon-Sat:09.00AM-05.00PM</span> </span>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box style={{ display: "flex", flexDirection: "column", padding: "1.5rem" }}>
                            <span style={{ color: "#fc8f00", fontSize: "2rem", fontWeight: "bolder" }}>Get Free Estimate </span>
                            <Box style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ color: "#ffffff" }}> Call Us : <span className="footerlinks" >+254 705 360 942</span>  </span>
                                <span style={{ color: "#ffffff" }}>Our Support and Sales team is available 24 /7 to answer your queries</span>
                                <Button variant="contained" size="small" style={{ backgroundColor: "#fc8f00", padding: "10px 25px" }}>
                                    CALL US TODAY
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box> <Divider style={{ backgroundColor: "#fff" }} /></Box>
                <Grid container spacing={2}>
                <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                        <Handyman style={{ fontWeight: "bolder", width: "60px", height: "60px", color: "darkorange" }} />
                        <Typography style={{
                            marginTop: "2rem",
                            fontWeight: "bolder",
                            fontSize: "1.6rem",
                            color: "white",
                        }}
                        >
                            Smart Fix
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        style={{ display: "flex", justifyContent: "flex-end",alignItems:"flex-end" }}
                    >
                        <Typography style={{ color: "white" }}>
                            {"Copyright © "}
                            <Link color="inherit" href="https://material-ui.com/">
                                Smart Fix
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                            All Rights Reserved
                        </Typography>
                    </Grid>
                </Grid>
            </footer>

        </>
    )
}

export default Footer
