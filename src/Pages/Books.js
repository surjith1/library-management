import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Books = () => {
    let navigate = useNavigate();
    let [students,setStudents] = useState([]);
    useEffect(()=>{
        loadStudents()
      },[])
      const loadStudents = async () => {
          let res = await axios.get("http://localhost:3001/students")
          setStudents(res.data);
    //     let res = await fetch("http://localhost:3001/students")
    //    //let data = await res.json()
    //    //console.log(data);
    //         setStudents(await res.json())
    console.log(students);
        
      }
  return (
    <div className='Book-sec footer-mb'>
      <h2 className="title">Book List</h2>
      <div className="book-list">
      {
        students.map(e=>{
          return <>
          
          <Card>
      <CardMedia
        component="img"
        alt={e.title}
        height="300"
        image={e.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {e.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
          </>
        })
      }
      </div>
      <div className='back-btn'>
    <Button variant="outlined" onClick={()=>navigate(-1)}>Back</Button>
    </div>
    </div>
  )
}

export default Books
