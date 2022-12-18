import React from 'react';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="center">
        <Typography variant="h1" component="h1" sx={{ fontSize: '38px' }}>
          Добро пожаловать!
        </Typography>
        <Typography variant="h2" component="h2" sx={{ fontSize: '30px' }}>
          Здесь собраны треки
        </Typography>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
