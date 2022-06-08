import React from'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useNavigate } from 'react-router-dom';
const Dashboard = ()=> {
  let navigate = useNavigate();
    return <>

    <Container maxWidth="lg">
    <h1>Dashboard</h1>
    <div className='dashboard-sec'>

    
    <div className="item-da-wrap">
    <Paper elevation={3} className="bk-avil">
    <div className="item-da">
    <div className="t-w-i">
    <h1>31</h1>
    <span> <LibraryBooksIcon /></span>
    </div>
    <h2>Books Available</h2>
    </div>
    </Paper>

    <Paper elevation={3} className="bk-cat">
    <div className="item-da">
    <div className="t-w-i">
    <h1>10</h1>
    <span> <LibraryBooksIcon /></span>
    </div>
    <h2>Books Catageroy</h2>
    </div>
    </Paper>

    <Paper elevation={3} className="bk-mem">
    <div className="item-da">
    <div className="t-w-i">
    <h1>4</h1>
    <span> <LibraryBooksIcon /></span>
    </div>
    <h2>Members</h2>
    </div>
    </Paper>

    <Paper elevation={3} className="bk-borrow">
    <div className="item-da">
    <div className="t-w-i">
    <h1>31</h1>
    <span> <LibraryBooksIcon /></span>
    </div>
    <h2>Books Borrowed</h2>
    </div>
    </Paper>

    
    <Paper elevation={3} className="bk-late">
    <div className="item-da">
    <div className="t-w-i">
    <h1>5000</h1>
    <span> <LibraryBooksIcon /></span>
    </div>
    <h2>Books Late Submission</h2>
    </div>

    </Paper>

    </div>
   
    </div>
    <div className='back-btn'>
    <Button variant="outlined" onClick={()=>navigate(-1)}>Back</Button>
    </div>

    </Container>
    </>
  }
  export default Dashboard;