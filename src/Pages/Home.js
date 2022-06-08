import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Library from '../images/Library-img.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SampleFormFormik from './SampleFormFormik';

const Home = () => {
   let navigate= useNavigate();
   

  return (
   
    <div className="home-sec">
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Library Management System
            
          </Typography>
          <Button className='add-btn' color="info" variant="contained" startIcon={<DashboardIcon style={{color:"white"}}/>} onClick={()=>navigate("/book-collection/add")}>Add Book Collection</Button>
          <Button color="warning" variant="contained" startIcon={<LoginIcon style={{color:"white"}}/>}  onClick={()=>navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
      <h2> Welcome to Library Management System .</h2>
    <img src={Library} alt="library" />
    </div>

  )
}

export default Home
