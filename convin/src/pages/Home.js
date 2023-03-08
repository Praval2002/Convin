import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteUser } from '../redux/actions';
import { loadUsers } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const home = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
      const {users} = useSelector(state => state.data)
    useEffect(() =>{
      dispatch(loadUsers());
    }, []);
    const handleDelete =  (id) => {
      if(window.confirm("Are you sure you want to Delete ?")){
        dispatch(deleteUser(id));
        dispatch(loadUsers());
      }
    };
  return (
    <div>
      <div ><Button variant="contained" color="primary" onClick={() => navigate('/addUser')}>
        Add Genre</Button></div>
      
<TableContainer component={Paper}>
      <Table sx={{ marginTop:10}} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow key={users.id}>
              <TableCell component="th" scope="row">
                {user.genre}
              </TableCell>
              <TableCell align="center"><ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button 
  color="primary"
  onClick={() => handleDelete(user.id)} >
    Delete</Button>
  <Button color="secondary">Edit</Button>
</ButtonGroup>
</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
    </div>
  )
}

export default home