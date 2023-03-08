import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
     const navigate= useNavigate;
        const handleInputChange = (e) =>{
       let {genre,value} = e.target;
      setState({...state, [genre]:value});
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      }
    }
    const [state, setState] = useState({
        genre: "",
    });

    const { genre } =state;
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
        Back to Home</Button>
      <h2>Add Genre</h2>
      <Box
      component="form"

      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    ></Box>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" label = "Genre" value={genre} type="text" onChange={handleInputChange}/><br></br>
      <Button variant="contained" color="primary" type="submit">
        Add Genre</Button>
    </div>
    
  )

export default AddUser