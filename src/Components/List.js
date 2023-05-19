import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import NavBar from './NavBar';
function List() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
  const fetchapi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata(json);
      })
  }
  useEffect(() => {
    fetchapi()

  }, [])
  return (
    <div>
      <NavBar />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>s.no</TableCell>
                <TableCell align="right">userId</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Body</TableCell>
                {/* <TableCell align="right">Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center" >{row.userId}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.body}</TableCell>
                  {/* <TableCell align="right">{row.action}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button variant="outlined" color="error" onClick={() => gotoHome()}>
        go to Home
      </Button>
      {/* <Button type='submit' onClick={addPost}>Create new</Button> */}

    </div>
  )
              }
export default List
