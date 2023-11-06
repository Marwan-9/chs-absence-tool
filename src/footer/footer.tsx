import React from "react";
import { Box, Typography, Divider } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'15px', width: '100%'}}>
      <Box
        sx={{
          display: 'flex',
          fontFamily: 'Oswald',
          justifyContent: 'center',
          fontSize: '18px',
          color: 'whitesmoke',
          paddingBottom: '10px',
          width: '100%'

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf:'center',
            justifyContent: 'center',

          }}
        >
          <Typography
            sx={{
              fontFamily: 'Oswald',
              paddingLeft: '29px',
            }}
          >
            © Copyright 2023 | All Rights Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Oswald',
            }}
          >
            Created By&nbsp;
            <a
              href="https://eg.linkedin.com/in/khalidmamdou7"
              style={{
                textDecoration: 'none',
                color: 'whitesmoke',
              }}
            >
              Khaled Mamdouh
            </a>
            &nbsp; &amp; &nbsp;
            <a
              href="https://eg.linkedin.com/in/marwan8"
              style={{
                color: 'whitesmoke',
                textDecoration: 'none',
              }}
            >
              Marwan Mostafa
            </a>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
