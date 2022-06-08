import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const Staffs = () => {
    let navigate = useNavigate();
    let [staff,setStaff] = useState([]);
    useEffect(()=> {
        loadStaffs()
    },[])
    const loadStaffs = async()=> {
        //let res = await axios.get("http://localhost:3001/staffs");
        let res = await axios.get("http://localhost:3001/staffs")
          setStaff(res.data,staff);  
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
  return (
    <div className='staff-sec footer-mb'>
      <h2 className='title'>Staffs Details</h2>
      <div className='staff-grid-sec'>
      <Paper elevation={3} className="bk-mem">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Staff Name</StyledTableCell>
            <StyledTableCell align="center">Qualification</StyledTableCell>
            <StyledTableCell align="center">Designtion</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Experience</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {staff.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.qualification}</StyledTableCell>
              <StyledTableCell align="center">{row.designation}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.experience}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </Paper>
    <div className='back-btn'>
    <Button variant="outlined" onClick={()=>navigate(-1)}>Back</Button>
    </div>
      </div>
    </div>
  )
}

export default Staffs
