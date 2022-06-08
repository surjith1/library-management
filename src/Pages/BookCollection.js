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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'


const BookCollection = () => {
    let navigate = useNavigate();
    let [collection,setCollection] = useState([]);
    useEffect(()=> {
        loadBook()
    },[])
    const loadBook = async()=> {
        //let res = await axios.get("http://localhost:3001/staffs");
        let res = await axios.get("http://localhost:3001/students")
          setCollection(res.data,collection);  
    }
    const deleteBook = (id)=> {
      console.log("deleteing Book",id);
      fetch(`http://localhost:3001/students/${id}`, {
        method:"DELETE",
      })
  .then(()=>loadBook())
   
  // for Delete need to refresh so that as separate function
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
      <h2 className='title'>Book collections </h2>
      
      <div className='staff-grid-sec'>
      <Paper elevation={3} className="bk-mem">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell align="center">Book</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Publisher</StyledTableCell>
            <StyledTableCell align="center">Year of Publish</StyledTableCell>
            <StyledTableCell align="center">Edition</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {collection.map((row) => (
            <StyledTableRow key={row.author}>
              
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.author}</StyledTableCell>
              <StyledTableCell align="center">{row.publisher}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
              <StyledTableCell align="center">{row.edition}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center"><img src={row.url} alt={row.title} /></StyledTableCell>
              <StyledTableCell align="center">
              <div className='btn-wrap'>
              <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={()=>navigate(`/book-collection/edit:${row.id}`)}>Edit</Button>
              
              <Button variant="contained" color='primary' startIcon={<DeleteIcon/>} onClick={()=>deleteBook(row.id)}>Delete</Button>
              </div>
              </StyledTableCell>
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

export default BookCollection
