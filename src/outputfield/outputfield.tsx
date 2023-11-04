import * as React from 'react';
import { Box, Typography }  from '@mui/material';
import { Result } from '../utlis/computeRemaining';
import { v4 as uuidv4 } from 'uuid';

import './animation.css'

interface IOutputFieldProps {
  data: Result;
}
const OutputField: React.FC<IOutputFieldProps> = (props: IOutputFieldProps) => {
  const { data } = props;
  console.log(data)
  const dataToShow = data.possibleCombinations.filter((combination)=> combination.lectures !== -1 || combination.tutorials !== -1 );
  console.log(data)
  console.log(dataToShow)
  const getCurrentState = () => {
    if (data.firstWarning === 1 ) return "First Warning";
    if (data.secondWarning === 1 ) return "Second Warning";
    if (data.deprivedFlag === 1 ) return "Deprived, Please Contact the Administration ASAP";
    else return "No Warnings";
  }
  return (
    <Box 
      sx={{
        display:'flex', 
        flexDirection: 'column',
        background:'#D2D6DA',
        borderRadius: '10px',
        boxSizing: 'border-box',
        padding: '20px 25px',
        gap: '5px 0px',
        width:'500px',
        '@media screen and (max-width: 768px)': { flex: 1 }
      }}
    >    
    <Typography sx={{fontSize:'20px', fontWeight:'500', fontFamily:'Oswald'}}>
      You still can miss by maximum, one of the following options
    </Typography>

    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        gap:'5px 0px'
      }}
    >

      {
        dataToShow.map((combination, index)=>{
          return(
            <Box
              key={uuidv4()}
              className={"verticalwipe linearWipe"} // Add the "verticalwipe" class here
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 20px',
                height: '40px',
                background: index % 2 === 0 ? '#F4F5F6' : '#bababf',
                borderRadius: '5px',
                transition: 'opacity 0.5s ease',
                animation: 'verticalwipe 0.5s ease', // Add animation property  
              }}>
              <Typography className='linearWipe' sx={{fontSize:'18px', fontWeight:'500', fontFamily:'Oswald'}}>

                {combination.lectures} Lectures  {combination.tutorials !== -1 ? combination.tutorials +  " and Tutorials" : ""}
              </Typography>
            </Box>
          )
        })
      }
      </Box>


    <Typography 
      sx={{
        fontFamily:'Oswald',
        transition: 'opacity 0.5s ease',
        animation: 'verticalwipe 0.5s ease'
      }}>
      { dataToShow.length !== 0 ? "Current State: " + getCurrentState() : ""}
    </Typography>
  
 </Box>
  );
}
export default OutputField;