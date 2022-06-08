import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MiddleContent from './MiddleContent';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';


const AdminLogin = () => {
  return (
    <Parallax  className="admin-sec">
    <div className='admin-login-wrap'>
    <Container maxWidth="xlg">
    <Grid container spacing={2}>
        <Grid item xs={4} sm={3}>
        
        <Sidebar />
       
        </Grid>
        <Grid item xs={8} sm={9}>
        
        <MiddleContent />
        
        </Grid>
        </Grid>
    </Container>
      
      
    
    </div>
    </Parallax>
  )
}

export default AdminLogin

export const Sidebar =()=>{
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return <>
  <Paper>
        <MenuList>
         <Link to="/dashboard"> <MenuItem>Dashboard</MenuItem> </Link>
          <Link to="/books"><MenuItem>Books</MenuItem></Link>
          <Link to="/staffs"><MenuItem>Staffs</MenuItem></Link>
          <Link to="/collection"><MenuItem>Book Collections</MenuItem></Link>
          
          
        </MenuList>
      </Paper>
  </>
}












