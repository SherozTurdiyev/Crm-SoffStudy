// import React, { Component } from 'react'
import './DashboardCss.css'
// import {RiSettingsLine} from 'react-icons/ri'

// import React from 'react';
import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineEllipsis } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';




const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Dashboard() {
    const [soat, setsoat] = useState('')
    const [minute, setminute] = useState('')
    const [second, setsecond] = useState('')
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            if (date.getHours() > 9) {
                setsoat(date.getHours())
            }
            else {
                setsoat("0" + date.getHours())
            }
            if (date.getMinutes() > 9) {
                setminute(date.getMinutes())
            }
            else {
                setminute("0" + date.getMinutes())
            }
            if (date.getSeconds() > 9) {
                setsecond(date.getSeconds())
            }
            else {
                setsecond("0" + date.getSeconds())
            }
        }, [1000])

    }, [])

    return (
        <div>
            <div>

            </div>
            {/* <div className='div35'>
                <div className='div__elements'>
                    <div className='div2__elements'>
                        <p>December 20, 2022</p>
                        <svg className='svg' width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6904 13.5252C12.6904 13.9305 12.4928 14.3192 12.1411 14.6058C11.7893 14.8924 11.3123 15.0534 10.8149 15.0534C10.3175 15.0534 9.84048 14.8924 9.48876 14.6058C9.13705 14.3192 8.93945 13.9305 8.93945 13.5252C8.93945 13.1199 9.13705 12.7313 9.48876 12.4447C9.84048 12.1581 10.3175 11.9971 10.8149 11.9971C11.3123 11.9971 11.7893 12.1581 12.1411 12.4447C12.4928 12.7313 12.6904 13.1199 12.6904 13.5252ZM12.6904 8.43146C12.6904 8.83675 12.4928 9.22543 12.1411 9.51201C11.7893 9.79859 11.3123 9.95959 10.8149 9.95959C10.3175 9.95959 9.84048 9.79859 9.48876 9.51201C9.13705 9.22543 8.93945 8.83675 8.93945 8.43146C8.93945 8.02618 9.13705 7.63749 9.48876 7.35091C9.84048 7.06433 10.3175 6.90333 10.8149 6.90333C11.3123 6.90333 11.7893 7.06433 12.1411 7.35091C12.4928 7.63749 12.6904 8.02618 12.6904 8.43146ZM12.6904 3.3377C12.6904 3.74298 12.4928 4.13167 12.1411 4.41825C11.7893 4.70483 11.3123 4.86583 10.8149 4.86583C10.3175 4.86583 9.84048 4.70483 9.48876 4.41825C9.13705 4.13167 8.93945 3.74298 8.93945 3.3377C8.93945 2.93241 9.13705 2.54373 9.48876 2.25715C9.84048 1.97057 10.3175 1.80957 10.8149 1.80957C11.3123 1.80957 11.7893 1.97057 12.1411 2.25715C12.4928 2.54373 12.6904 2.93241 12.6904 3.3377Z" fill="black" />
                        </svg>
                    </div>
                    <h2 style={{ color: "black" }}>Frontent 010</h2>
                    <h5>O’quvchilar soni : 6</h5>
                    <h5 style={{ color: "black" }}>O’rtacha o’z</h5>
                    <div>
                        <div className='div__lines'>
                            <div className='div__line'> </div>
                            <div className='div__line2'></div>
                        </div>
                        <p className='p'>70%</p>
                    </div>
                    <div className='div__images'>
                        <h5>O’quvchilar soni : 6</h5>
                        <div className='images'>
                            <img src={"./Images/Ellipse 18.png"} alt="" />
                            <img src={"./Images/Ellipse 19.png"} alt="" />
                            <img src={"./Images/Add.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
                <Navbar/>
                <Box sx={{ display: 'flex', position:"relative"}}>
                    <CssBaseline/>
                    <AppBar style={{backgroundColor:"white" , boxShadow:"none" , marginTop:"-65px" , marginLeft:"-5px" , position:"fixed"}}  position="reletive" open={open} sx={{ width: "65px" , height:"65px"}}  > 
                        <IconButton style={{marginLeft:"0px"}}
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            // sx={{
                            //     color: "bleck",
                            //     ...(open &&  { display: 'none' }),
                            // }}
                        >
                            <svg className='setting1' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5007 34.888C17.4678 34.888 16.4195 34.6567 15.6024 34.1788L7.12327 29.2917C3.66994 26.9638 3.4541 26.6092 3.4541 22.9555V14.0446C3.4541 10.3909 3.65452 10.0363 7.04618 7.73923L15.587 2.8059C17.2057 1.86548 19.7495 1.86548 21.3682 2.8059L29.8782 7.7084C33.3316 10.0363 33.5474 10.3909 33.5474 14.0446V22.9401C33.5474 26.5938 33.347 26.9484 29.9553 29.2455L21.4145 34.1788C20.582 34.6567 19.5336 34.888 18.5007 34.888ZM18.5007 4.42465C17.8532 4.42465 17.2211 4.54798 16.7741 4.81007L8.29493 9.71256C5.78202 11.4084 5.78202 11.4084 5.78202 14.0446V22.9401C5.78202 25.5763 5.78202 25.5763 8.3566 27.3184L16.7741 32.1746C17.6836 32.6988 19.3332 32.6988 20.2428 32.1746L28.722 27.2721C31.2195 25.5763 31.2195 25.5763 31.2195 22.9401V14.0446C31.2195 11.4084 31.2195 11.4084 28.6449 9.66632L20.2274 4.81007C19.7803 4.54798 19.1482 4.42465 18.5007 4.42465Z" fill="black" />
                                <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                            </svg>
                        </IconButton>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <svg className='setting1' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5007 34.888C17.4678 34.888 16.4195 34.6567 15.6024 34.1788L7.12327 29.2917C3.66994 26.9638 3.4541 26.6092 3.4541 22.9555V14.0446C3.4541 10.3909 3.65452 10.0363 7.04618 7.73923L15.587 2.8059C17.2057 1.86548 19.7495 1.86548 21.3682 2.8059L29.8782 7.7084C33.3316 10.0363 33.5474 10.3909 33.5474 14.0446V22.9401C33.5474 26.5938 33.347 26.9484 29.9553 29.2455L21.4145 34.1788C20.582 34.6567 19.5336 34.888 18.5007 34.888ZM18.5007 4.42465C17.8532 4.42465 17.2211 4.54798 16.7741 4.81007L8.29493 9.71256C5.78202 11.4084 5.78202 11.4084 5.78202 14.0446V22.9401C5.78202 25.5763 5.78202 25.5763 8.3566 27.3184L16.7741 32.1746C17.6836 32.6988 19.3332 32.6988 20.2428 32.1746L28.722 27.2721C31.2195 25.5763 31.2195 25.5763 31.2195 22.9401V14.0446C31.2195 11.4084 31.2195 11.4084 28.6449 9.66632L20.2274 4.81007C19.7803 4.54798 19.1482 4.42465 18.5007 4.42465Z" fill="black" />
                                    <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                                </svg> : <> <svg className='setting1' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5007 34.888C17.4678 34.888 16.4195 34.6567 15.6024 34.1788L7.12327 29.2917C3.66994 26.9638 3.4541 26.6092 3.4541 22.9555V14.0446C3.4541 10.3909 3.65452 10.0363 7.04618 7.73923L15.587 2.8059C17.2057 1.86548 19.7495 1.86548 21.3682 2.8059L29.8782 7.7084C33.3316 10.0363 33.5474 10.3909 33.5474 14.0446V22.9401C33.5474 26.5938 33.347 26.9484 29.9553 29.2455L21.4145 34.1788C20.582 34.6567 19.5336 34.888 18.5007 34.888ZM18.5007 4.42465C17.8532 4.42465 17.2211 4.54798 16.7741 4.81007L8.29493 9.71256C5.78202 11.4084 5.78202 11.4084 5.78202 14.0446V22.9401C5.78202 25.5763 5.78202 25.5763 8.3566 27.3184L16.7741 32.1746C17.6836 32.6988 19.3332 32.6988 20.2428 32.1746L28.722 27.2721C31.2195 25.5763 31.2195 25.5763 31.2195 22.9401V14.0446C31.2195 11.4084 31.2195 11.4084 28.6449 9.66632L20.2274 4.81007C19.7803 4.54798 19.1482 4.42465 18.5007 4.42465Z" fill="black" />
                                    <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                                </svg> <p classname="fs-5" style={{ marginLeft: "45px" , color:"black" }}>Dashboard</p> </>}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <div className='CRM'>
                            <div className='dashboard__crm'>
                                {/* <svg className='setting1' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5007 34.888C17.4678 34.888 16.4195 34.6567 15.6024 34.1788L7.12327 29.2917C3.66994 26.9638 3.4541 26.6092 3.4541 22.9555V14.0446C3.4541 10.3909 3.65452 10.0363 7.04618 7.73923L15.587 2.8059C17.2057 1.86548 19.7495 1.86548 21.3682 2.8059L29.8782 7.7084C33.3316 10.0363 33.5474 10.3909 33.5474 14.0446V22.9401C33.5474 26.5938 33.347 26.9484 29.9553 29.2455L21.4145 34.1788C20.582 34.6567 19.5336 34.888 18.5007 34.888ZM18.5007 4.42465C17.8532 4.42465 17.2211 4.54798 16.7741 4.81007L8.29493 9.71256C5.78202 11.4084 5.78202 11.4084 5.78202 14.0446V22.9401C5.78202 25.5763 5.78202 25.5763 8.3566 27.3184L16.7741 32.1746C17.6836 32.6988 19.3332 32.6988 20.2428 32.1746L28.722 27.2721C31.2195 25.5763 31.2195 25.5763 31.2195 22.9401V14.0446C31.2195 11.4084 31.2195 11.4084 28.6449 9.66632L20.2274 4.81007C19.7803 4.54798 19.1482 4.42465 18.5007 4.42465Z" fill="black" />
                                    <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                                </svg> */}
                                {/* <h2 style={{ color: "black" }}>Dashboard</h2> */}
                            </div>
                            <div className='section'>
                               <Link style={{textDecoration:"none"}} to='/'> <div className='guruhlar'>
                                    <svg className='settings' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.2802 13.6096C15.1502 14.7396 13.5302 15.0896 12.1002 14.6396L9.5102 17.2196C9.3302 17.4096 8.9602 17.5296 8.6902 17.4896L7.4902 17.3296C7.0902 17.2796 6.7302 16.8996 6.6702 16.5096L6.5102 15.3096C6.4702 15.0496 6.6002 14.6796 6.7802 14.4896L9.3602 11.9096C8.9202 10.4796 9.2602 8.85965 10.3902 7.72965C12.0102 6.10965 14.6502 6.10965 16.2802 7.72965C17.9002 9.33965 17.9002 11.9796 16.2802 13.6096Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.4496 16.2799L9.59961 15.4199" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3945 10.7002H13.4035" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {/* <i class="fa-solid fa-key"></i> */}
                                    <h5 className='h5'>Dashboard</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div></Link>
                               <Link style={{textDecoration:"none"}} to='/guruh'> <div className='guruhlar'>
                                    {/* <FiBox className='sozlamalar'/> */}
                                    <svg className='settings' style={{ marginLeft: "-5px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#9197B3" />
                                        <path d="M12.0006 13.0797C11.8706 13.0797 11.7406 13.0497 11.6206 12.9797L6.32061 9.9197C5.96061 9.7097 5.84059 9.2497 6.05059 8.8997C6.26059 8.5397 6.72061 8.4197 7.07061 8.6297L11.9906 11.4797L16.8806 8.6497C17.2406 8.4397 17.7006 8.5697 17.9006 8.9197C18.1006 9.2697 17.9806 9.7397 17.6306 9.9397L12.3706 12.9797C12.2606 13.0397 12.1306 13.0797 12.0006 13.0797Z" fill="#9197B3" />
                                        <path d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z" fill="#9197B3" />
                                        <path d="M12.0002 18.7498C11.4202 18.7498 10.8503 18.6198 10.3903 18.3698L7.19025 16.5898C6.23025 16.0598 5.49023 14.7898 5.49023 13.6898V10.2998C5.49023 9.20981 6.24025 7.9398 7.19025 7.3998L10.3903 5.6198C11.3103 5.1098 12.6902 5.1098 13.6102 5.6198L16.8102 7.3998C17.7702 7.9298 18.5103 9.19981 18.5103 10.2998V13.6898C18.5103 14.7798 17.7602 16.0498 16.8102 16.5898L13.6102 18.3698C13.1502 18.6298 12.5802 18.7498 12.0002 18.7498ZM12.0002 6.7498C11.6702 6.7498 11.3502 6.8098 11.1202 6.9398L7.92026 8.7198C7.43026 8.9898 6.99023 9.7498 6.99023 10.2998V13.6898C6.99023 14.2498 7.43026 14.9998 7.92026 15.2698L11.1202 17.0498C11.5802 17.3098 12.4202 17.3098 12.8802 17.0498L16.0802 15.2698C16.5702 14.9998 17.0103 14.2398 17.0103 13.6898V10.2998C17.0103 9.73981 16.5702 8.9898 16.0802 8.7198L12.8802 6.9398C12.6502 6.8098 12.3302 6.7498 12.0002 6.7498Z" fill="#9197B3" />
                                    </svg>
                                    <h5 className='h5'>Guruhlar</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div></Link>
                                <Link style={{textDecoration:"none"}} to='/table'>
                                <div className='guruhlar'>
                                    <svg className='settings' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0006 22.7498H9.00063C7.68063 22.7498 6.58063 22.6198 5.65063 22.3398C5.31063 22.2398 5.09063 21.9098 5.11063 21.5598C5.36063 18.5698 8.39063 16.2197 12.0006 16.2197C15.6106 16.2197 18.6306 18.5598 18.8906 21.5598C18.9206 21.9198 18.7006 22.2398 18.3506 22.3398C17.4206 22.6198 16.3206 22.7498 15.0006 22.7498ZM6.72063 21.0598C7.38063 21.1898 8.13063 21.2498 9.00063 21.2498H15.0006C15.8706 21.2498 16.6206 21.1898 17.2806 21.0598C16.7506 19.1398 14.5606 17.7197 12.0006 17.7197C9.44063 17.7197 7.25063 19.1398 6.72063 21.0598Z" fill="#9197B3" />
                                        <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.9999 14.92C9.60992 14.92 7.66992 12.97 7.66992 10.58C7.66992 8.19002 9.60992 6.25 11.9999 6.25C14.3899 6.25 16.3299 8.19002 16.3299 10.58C16.3299 12.97 14.3899 14.92 11.9999 14.92ZM11.9999 7.75C10.4399 7.75 9.16992 9.02002 9.16992 10.58C9.16992 12.15 10.4399 13.42 11.9999 13.42C13.5599 13.42 14.8299 12.15 14.8299 10.58C14.8299 9.02002 13.5599 7.75 11.9999 7.75Z" fill="#9197B3" />
                                    </svg>
                                    {/* <RiAccountBoxLine className='sozlamalar'/> */}
                                    <h5 className='h5'>O'quvchilar</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div>
                                </Link>
                                <div className='guruhlar'>
                                    <svg className='settings' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.7499 14.1098C10.7499 14.6098 10.6099 15.0698 10.3699 15.4698C9.77981 16.4398 8.56979 17.0498 7.16979 17.0498C5.76979 17.0498 4.55978 16.4298 3.96978 15.4698C3.72978 15.0698 3.58984 14.6098 3.58984 14.1098C3.58984 13.2498 3.98982 12.4798 4.62982 11.9198C5.27982 11.3498 6.16978 11.0098 7.15978 11.0098C8.14978 11.0098 9.03981 11.3598 9.68981 11.9198C10.3499 12.4698 10.7499 13.2498 10.7499 14.1098Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.0002 10.9701V13.0302C22.0002 13.5802 21.5602 14.0301 21.0002 14.0501H19.0401C17.9601 14.0501 16.9702 13.2601 16.8802 12.1801C16.8202 11.5501 17.0601 10.9601 17.4801 10.5501C17.8501 10.1701 18.3602 9.9502 18.9202 9.9502H21.0002C21.5602 9.9702 22.0002 10.4201 22.0002 10.9701Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    {/* <CiWallet className='sozlamalar'/> */}
                                    <h5 className='h5'>Bug'alteriya</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div>
                                <div className='guruhlar'>
                                    <svg className='settings' style={{ marginLeft: "-6px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.7503C11.37 22.7503 10.78 22.5104 10.34 22.0604L8.82001 20.5404C8.70001 20.4204 8.38 20.2904 8.22 20.2904H6.06C4.76 20.2904 3.70999 19.2403 3.70999 17.9403V15.7804C3.70999 15.6204 3.57999 15.3004 3.45999 15.1804L1.94 13.6604C1.5 13.2204 1.25 12.6303 1.25 12.0003C1.25 11.3703 1.49 10.7803 1.94 10.3403L3.45999 8.82028C3.57999 8.70028 3.70999 8.3803 3.70999 8.2203V6.06039C3.70999 4.76039 4.76 3.71029 6.06 3.71029H8.22C8.38 3.71029 8.70001 3.58029 8.82001 3.46029L10.34 1.94027C11.22 1.06027 12.78 1.06027 13.66 1.94027L15.18 3.46029C15.3 3.58029 15.62 3.71029 15.78 3.71029H17.94C19.24 3.71029 20.29 4.76039 20.29 6.06039V8.2203C20.29 8.3803 20.42 8.70028 20.54 8.82028L22.06 10.3403C22.5 10.7803 22.75 11.3703 22.75 12.0003C22.75 12.6303 22.51 13.2204 22.06 13.6604L20.54 15.1804C20.42 15.3004 20.29 15.6204 20.29 15.7804V17.9403C20.29 19.2403 19.24 20.2904 17.94 20.2904H15.78C15.62 20.2904 15.3 20.4204 15.18 20.5404L13.66 22.0604C13.22 22.5104 12.63 22.7503 12 22.7503ZM4.51999 14.1203C4.91999 14.5203 5.20999 15.2204 5.20999 15.7804V17.9403C5.20999 18.4103 5.59 18.7904 6.06 18.7904H8.22C8.78 18.7904 9.48001 19.0803 9.88 19.4803L11.4 21.0003C11.72 21.3203 12.28 21.3203 12.6 21.0003L14.12 19.4803C14.52 19.0803 15.22 18.7904 15.78 18.7904H17.94C18.41 18.7904 18.79 18.4103 18.79 17.9403V15.7804C18.79 15.2204 19.08 14.5203 19.48 14.1203L21 12.6003C21.16 12.4403 21.25 12.2303 21.25 12.0003C21.25 11.7703 21.16 11.5604 21 11.4004L19.48 9.88034C19.08 9.48034 18.79 8.7803 18.79 8.2203V6.06039C18.79 5.59039 18.41 5.21029 17.94 5.21029H15.78C15.22 5.21029 14.52 4.92035 14.12 4.52035L12.6 3.00033C12.28 2.68033 11.72 2.68033 11.4 3.00033L9.88 4.52035C9.48001 4.92035 8.78 5.21029 8.22 5.21029H6.06C5.59 5.21029 5.20999 5.59039 5.20999 6.06039V8.2203C5.20999 8.7803 4.91999 9.48034 4.51999 9.88034L3 11.4004C2.84 11.5604 2.75 11.7703 2.75 12.0003C2.75 12.2303 2.84 12.4403 3 12.6003L4.51999 14.1203Z" fill="#9197B3" />
                                        <path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="#9197B3" />
                                        <path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="#9197B3" />
                                        <path d="M8.99945 15.7495C8.80945 15.7495 8.61945 15.6795 8.46945 15.5295C8.17945 15.2395 8.17945 14.7595 8.46945 14.4695L14.4695 8.46945C14.7595 8.17945 15.2395 8.17945 15.5295 8.46945C15.8195 8.75945 15.8195 9.23951 15.5295 9.52951L9.52945 15.5295C9.37945 15.6795 9.18945 15.7495 8.99945 15.7495Z" fill="#9197B3" />
                                    </svg>

                                    {/* <CiDiscount1 className='sozlamalar'/>*/}
                                    <h5 className='h5'>Sozlamalar</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div>
                                <div className='guruhlar'>
                                    <svg className='settings' style={{ marginLeft: "-10px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 22.3194C7.72 22.3194 7.42998 22.2494 7.16998 22.1094C6.59998 21.8094 6.25 21.2094 6.25 20.5694V19.1495C3.23 18.8395 1.25 16.6194 1.25 13.4394V7.43945C1.25 3.99945 3.56 1.68945 7 1.68945H17C20.44 1.68945 22.75 3.99945 22.75 7.43945V13.4394C22.75 16.8794 20.44 19.1894 17 19.1894H13.23L8.96997 22.0295C8.67997 22.2195 8.34 22.3194 8 22.3194ZM7 3.17944C4.42 3.17944 2.75 4.84944 2.75 7.42944V13.4295C2.75 16.0095 4.42 17.6795 7 17.6795C7.41 17.6795 7.75 18.0195 7.75 18.4295V20.5595C7.75 20.6895 7.83 20.7495 7.88 20.7795C7.93001 20.8095 8.03001 20.8395 8.14001 20.7695L12.59 17.8095C12.71 17.7295 12.86 17.6795 13.01 17.6795H17.01C19.59 17.6795 21.26 16.0095 21.26 13.4295V7.42944C21.26 4.84944 19.59 3.17944 17.01 3.17944H7Z" fill="#9197B3" />
                                        <path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98942 12.0998 9.41941 12.4198 9.19941C12.7898 8.94941 12.9098 8.77942 12.9098 8.51942C12.9098 8.01942 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01942 11.0898 8.51942C11.0898 8.92942 10.7498 9.26942 10.3398 9.26942C9.92984 9.26942 9.58984 8.92942 9.58984 8.51942C9.58984 7.18942 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18942 14.4098 8.51942C14.4098 9.65942 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#9197B3" />
                                        <path d="M12 14.6006C11.58 14.6006 11.25 14.2606 11.25 13.8506C11.25 13.4406 11.59 13.1006 12 13.1006C12.41 13.1006 12.75 13.4406 12.75 13.8506C12.75 14.2606 12.42 14.6006 12 14.6006Z" fill="#9197B3" />
                                    </svg>
                                    {/* <BsChatDots className='sozlamalar'/>  */}
                                    <h5 className='h5'>Yordam</h5>
                                    <i class="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                            <Toolbar sx={{ width: "75px" }}>
                                <IconButton

                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{
                                        color: "white",
                                        ...(open ? { display: 'block' } : { display: 'none' }),
                                    }}
                                >
                                    <div className='soat'>
                                        <b>{soat} : {minute} : {second}</b>
                                    </div>
                                </IconButton>
                            </Toolbar>
                            <Toolbar sx={{ width: "75px" }}>
                                <IconButton

                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{
                                        color: "white",
                                        ...(open ? { display: 'none' } : { display: 'block' }),
                                    }}
                                >
                                    <div style={{ marginLeft: "19px" }}>
                                        <b className='soat__b'>{soat}</b><br />  <AiOutlineEllipsis className='Ai' />
                                        <b className='soat__b'>{minute}</b><br /> <AiOutlineEllipsis className='Ai2' />
                                        <b className='soat__b'>{second}</b><br />
                                    </div>
                                </IconButton>
                            </Toolbar>
                            <div className='footer'>
                                <img src="./images/Ustoz.jpg" alt="teacher" />
                                <div className='h4'>
                                    <h4 className='h4' style={{ marginLeft: "15px" }}>Turdiyev Sheroz <br /> <span className='span'>Project Manager</span></h4>
                                </div>
                                <i class="fa-solid fa-angle-down footer__i"></i>
                            </div>
                        </div>
                        <Divider />
                    </Drawer>
                </Box>
        </div>
    )
}

