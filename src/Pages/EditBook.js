import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate, useParams } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';

const EditBook = () => {
  let navigate= useNavigate();
  const {id} = useParams();
  const idvalue = id.replace(":","");
  const [book,setBook] = useState(null)
  useEffect(()=>{
    fetch(`http://localhost:3001/students/${idvalue}`)
   .then((data)=>data.json())
   .then((bk)=>setBook(bk))
  },[idvalue])
    
  return (
    <div className='bk-req-sec'>
    {book ? <EditBookForm book={book} />:"Loading..."}
    <div className='back-btn'>
    <Button variant="outlined" onClick={()=>navigate(-1)}>Back</Button>
    </div>
    </div>
  )
}

export default EditBook

export const EditBookForm = ({book})=>{
  let navigate= useNavigate();
  const {id} = useParams();
  const idvalue = id.replace(":","");
  const validate = yup.object({
    title: yup.string().required("Enter Title"),
    author: yup.string().required("Enter Author Name"),
    publisher: yup.string().required("Enter Publisher"),
    year: yup.number().required("Enter Year of Publish"),
    edition: yup.number().required("Enter Edition"),
    description: yup.string().required("Enter Description"),
    url: yup.string().required("Enter Poster Url"),

  });
 
 
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      title:book.title,
      author:book.author,
      publisher:book.publisher,
      year:book.year,
      edition:book.edition,
      description:book.description,
      url: book.url,
    },
    
    validationSchema:validate,
    onSubmit: (values) => {
      console.log("Form values", values); 
      editBook(values)
    } 
  })
  const editBook=(editbook)=> {
    fetch(`http://localhost:3001/students/${idvalue}`, {
      method: "PUT",
      body: JSON.stringify(editbook),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/collection"))
      
      
  }
return (
  <>
  <Paper elevation={3}>
  <div className="student-login">
  <h1>Book Request</h1>
  <form onSubmit={handleSubmit}>
  <div className="form-group">
  <TextField id="title" label="Title" variant="standard" type="text" name="title" fullWidth 
  onBlur={handleBlur} onChange={handleChange} 
  value={values.title} error={errors.title && touched.title}
  helperText={errors.title && touched.title ? errors.title : ""} />
  </div>
  <div className="form-group">
  <TextField id="author" label="Author Name" variant="standard" type="text" name="author" fullWidth 
  onBlur={handleBlur} onChange={handleChange} 
  value={values.author} error={errors.author && touched.author}
  helperText={errors.author && touched.author ? errors.author : ""}/>
  </div>
  <div className="form-group">
  <TextField id="publisher" label="Publisher" variant="standard" type="text" name="publisher" fullWidth 
  onBlur={handleBlur} onChange={handleChange} 
  value={values.publisher} error={errors.publisher && touched.publisher}
  helperText={errors.publisher && touched.publisher ? errors.publisher : ""}/>
  </div>
  <div className="form-group">
  <TextField id="year" label="Year of Publish" variant="standard" type="number" name="year" fullWidth 
  onBlur={handleBlur} onChange={handleChange} 
  value={values.year} error={errors.year && touched.year}
  helperText={errors.year && touched.year ? errors.year : ""}/>
  </div>
  <div className="form-group">
  <TextField id="edition" label="Edition" variant="standard" type="text" name="edition" fullWidth 
  onBlur={handleBlur} onChange={handleChange} 
  value={values.edition} error={errors.edition && touched.edition}
  helperText={errors.edition && touched.edition ? errors.edition : ""}/>
  </div>

  <div className="form-group">
  <TextField id="description" label="Description" variant="standard" type="text" name="description" fullWidth onBlur={handleBlur} onChange={handleChange} 
  value={values.description} error={errors.description && touched.description}
  helperText={errors.description && touched.description ? errors.description : ""}/>
  </div>
  <div className="form-group">
  <TextField id="url" label="Poster" variant="standard" type="text" name="url" fullWidth onBlur={handleBlur} onChange={handleChange} 
  value={values.url} error={errors.url && touched.url}
  helperText={errors.url && touched.url ? errors.url : ""}/>
  </div>

  <div className="form-group btn">
  <Fab variant="extended" type='submit'>
<NavigationIcon sx={{ mr: 1 }} />
Update Book
</Fab>
  </div>
  

  </form>
  </div>
  </Paper>
  </>
)
}
