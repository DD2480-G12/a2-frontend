import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Index = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('/history').then((res) => {
      setRows(res.data);
    })
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: '32px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="ci history table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Commit ID</TableCell>
                <TableCell>Build Time</TableCell>
                <TableCell>Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.uid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.uid}
                  </TableCell>
                  <TableCell>{row.commitId}</TableCell>
                  <TableCell >{(new Date(row.timestamp)).toLocaleString()}</TableCell>
                  <TableCell >
                    <Link to={`/history/${row.uid}`} style={{ textDecoration: 'none' }}>
                      <Button variant="text">Click</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Index;
