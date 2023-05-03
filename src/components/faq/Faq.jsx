import React, { useState } from 'react'
import './faq.css'
import { Box, Button, Collapse, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
 
import {
    Assignment,
    ExpandLess,
    Campaign,
    ExpandMore,
    Layers,
    StarBorder,
    Circle,
    Dashboard,
    Home,
    BarChart,
    Message,
    AccountCircle,
} from '@mui/icons-material';

function Faq() {
    const navigate = useNavigate()
    const [nlOpen, setnlOpen] = useState(false);
    const toggleNestedList = () => {
        setnlOpen(!nlOpen);
        setnlOpen1(false);
        setnlOpen2(false);
    };
    const [nlOpen1, setnlOpen1] = useState(false);
    const toggleNestedList1 = () => {
        setnlOpen1(!nlOpen1);
        setnlOpen(false);
        setnlOpen2(false);
    };
    const [nlOpen2, setnlOpen2] = useState(false);
    const toggleNestedList2 = () => {
        setnlOpen2(!nlOpen2);
        setnlOpen(false);
        setnlOpen1(false);
    };
    return (
        <>
            <Box sx={{ margin: { md: '3rem', xs: '0' } }}>
                <Grid container spacing={2}>
                   
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={2} style={{ paddingTop: '3px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }} className="menu">
                            <Grid item xs={12} style={{ margin: '0 .9rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                <Typography variant="h2" sx={{ fontWeight: 600, fontSize: '2.399rem !important' }} class="text-mustard text-[32px]">
                                    Frequently asked Questions
                                </Typography>
                                <Typography variant="h6" sx={{}}>
                                    Question you might ask about our products and services
                                </Typography>

                                <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1rem !important', mt: 3 }}>
                                    How long can i enjoy free trial service ?
                                </Typography>
                                <Typography variant="p" sx={{ width: '90%' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} style={{ margin: '0 !important' }}>
                                <ListItemButton
                                    style={{ margin: '0 !important' }}
                                    className={nlOpen1 ? `is-expandable lib-active  ${nlOpen1 && 'expanded'}` : `is-expandable  ${nlOpen1 && 'expanded'}`}
                                    onClick={toggleNestedList1}
                                >
                                    <ListItemText className='faq-title' primary='Is thre a viable project you can look at ?' />

                                    {nlOpen1 ? <ExpandLess /> : <ExpandMore />}
                                    <Typography variant='span' className='indicator' />
                                </ListItemButton>
                                <Collapse
                                    in={nlOpen1}
                                    timeout='auto'
                                    unmountOnExit
                                    className={`collapsible-menu ${nlOpen1 && 'open'}`}
                                >
                                    <List component='div' disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <Divider sx={{ margin: '1rem' }} />
                            </Grid>

                            <Grid item xs={12} style={{ margin: '0 !important' }}>
                                <ListItemButton
                                    style={{ margin: '0 !important' }}
                                    className={nlOpen2 ? `is-expandable lib-active  ${nlOpen2 && 'expanded'}` : `is-expandable  ${nlOpen2 && 'expanded'}`}
                                    onClick={toggleNestedList2}
                                >
                                    <ListItemText className='faq-title' primary='Is thre a viable project you can look at ?' />

                                    {nlOpen2 ? <ExpandLess /> : <ExpandMore />}
                                    <Typography variant='span' className='indicator' />
                                </ListItemButton>
                                <Collapse
                                    in={nlOpen2}
                                    timeout='auto'
                                    unmountOnExit
                                    className={`collapsible-menu ${nlOpen2 && 'open'}`}
                                >
                                    <List component='div' disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <Divider sx={{ margin: '1rem' }} />

                            </Grid>

                            <Grid item xs={12} style={{ margin: '0 !important' }}>
                                <ListItemButton
                                    style={{ margin: '0 !important' }}
                                    className={nlOpen ? `is-expandable lib-active  ${nlOpen && 'expanded'}` : `is-expandable  ${nlOpen && 'expanded'}`}
                                    onClick={toggleNestedList}
                                >
                                    <ListItemText className='faq-title' primary='Is thre a viable project you can look at ?' />

                                    {nlOpen ? <ExpandLess /> : <ExpandMore />}
                                    <Typography variant='span' className='indicator' />
                                </ListItemButton>
                                <Collapse
                                    in={nlOpen}
                                    timeout='auto'
                                    unmountOnExit
                                    className={`collapsible-menu ${nlOpen && 'open'}`}
                                >
                                    <List component='div' disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Circle />
                                            </ListItemIcon>
                                            <ListItemText primary='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."' />
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <Divider sx={{ margin: '1rem' }} />

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Faq

