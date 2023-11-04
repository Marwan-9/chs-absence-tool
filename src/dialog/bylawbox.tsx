
import React from "react";
import { Box } from '@mui/material';

interface IBylawBoxProps{
  onClick?: () => void;
  children?: JSX.Element;
  active?: boolean;
  sx?: React.CSSProperties;
}

const BylawBox: React.FC<IBylawBoxProps> = (props: IBylawBoxProps) => {
  const { onClick, children, active, sx} = props;
  return(

    <Box 
      onClick={onClick} 
      sx={{
        width: '550px',
        height: '120px',
        padding:"0px 5px",
        boxSizing:'border-box',
        borderRadius: '10px',
        background: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: active ? 'background-color 0.3s, transform 0.3s, box-shadow 0.3s' : "",
        cursor: active ? 'pointer' : "",
        '&:hover': {
          background: active ? '#059862' : "", 
          transform: active ? 'scale(1.05)' : "", 
          boxShadow: active ? '0 0 10px rgba(0, 0, 0, 0.3)' : "", 
        },
        '&:active': {
          background: active ? '#059862' : "",
          boxShadow: active ? '0 0 5px rgba(0, 0, 0, 0.3)' : "", 
        },
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default BylawBox;