import React from "react";
import { Box, Typography } from '@mui/material';
const NavBar : React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000028',      
        marginBottom: '30px'
      }}>
        <span 
          onClick={() => window.location.href = '/index.html'}
          style={{
            cursor: 'pointer'
          }}
          >
          <Typography
            sx={{
              fontSize: '30px',
              padding: '0.5% 0% 0.5% 7%',
              margin: '0px 0px 0px 0px',
              color: "#E5E5E9",
              fontFamily: 'Oswald'
            }}
          >
            CHS Absence Tool
            <sub style={{fontSize:'12px'}}>  v2.0.0-alpha</sub>
          </Typography>

        </span>
    </Box>
  );
}

export default NavBar;