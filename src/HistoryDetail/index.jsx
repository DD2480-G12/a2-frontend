import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Index = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/history/${params.historyId ?? ''}`).then((res) => {
      setData(res.data);
    })
  }, [params]);

  if (data === undefined) return <Container maxWidth="lg"><h1>Loading...</h1></Container>

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: '32px' }}>
        <Box style={{ marginBottom: '16px' }}>
          <Link to="/history" >Go Back</Link>
        </Box>
        <Typography variant="h4" component="div" gutterBottom>
          Build Log for ID={data.uid}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Commit ID: {data.commitId}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          Run at: {(new Date(data.timestamp)).toLocaleString()}
        </Typography>
        <Box sx={{
          color: '#fff',
          backgroundColor: '#000',
          borderColor: '#132F4C',
          borderRadius: '8px',
          overflowX: 'scroll',
          padding: '16px',
        }}>
          <pre>{data.content}</pre>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
