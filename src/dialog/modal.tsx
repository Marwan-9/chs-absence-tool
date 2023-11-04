import * as React from 'react';
import {Box, Modal, Typography, Divider} from '@mui/material';
import BylawBox from './bylawbox';
import StudentForm from './studentform';

const style: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: '700', 
  fontFamily: 'Oswald'
}
export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Modal
        open={open}
        sx={{
            border: 'none',
            transition: 'opacity 1s ease-in-out',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            background: '#D2D6DA',
            borderRadius: '10px',
            minHeight: '80%',
            overflowY:'auto',
            outline: 0,
            boxShadow: 24,

            p: 4,
            '@media screen and (max-width: 768px)': { width: '80%' }

          }}>
          <Typography 
            sx={{  
                fontSize:'50px',
                fontWeight:'700',
                marginBottom: '0px',
                paddingBottom: '0px',            
                fontFamily: 'Oswald', 
            }}
          >
            We Are Back !
          </Typography>
          <Box
            sx={{
              display:'flex',
              flexDirection: 'column', 
              boxSizing: 'border-box',
              width: '100%', 
              height:"400px",
              
          }}>
            <Typography 
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom:'10px',
                fontFamily: 'Oswald', 
              }}> 
                Choose your bylaw 
            </Typography>

            <Box
              sx={{
                display: 'flex',
                boxSizing: 'border-box',
                padding: '0px 100px',
                marginBottom:'20px',
                gap: '0px 20px',
                justifyContent: 'space-between', 
                '@media screen and (max-width: 768px)': { padding: '0px 10px' }

              }}
              >
                <BylawBox
                  active
                  onClick={handleClose}
                  sx={{
                    background:'#04AA6D',
                  }}>
                  <>
                    <Typography sx={style}> Old Bylaw </Typography>
                    <Typography sx={{...style, fontFamily:'Cairo', fontSize:'20px'}}> لائحة قديمة </Typography>
                  </>
                </BylawBox>
                <Divider orientation='vertical'/>

                <BylawBox
                  active={false}
                  sx={{
                    background: '#808080',
                    opacity:'0.6'
                  }}
                >
                <>
                    <Typography sx={style}> New Bylaw </Typography>
                    <Typography sx={{...style, fontFamily:'Cairo', fontSize:'20px'}}> لائحة جديدة </Typography>
                    <Typography sx={{...style, fontFamily:'Cairo', fontSize:'20px'}}> (Soon)</Typography>

                  </>
                </BylawBox>
            </Box>
            <Divider sx={{marginBottom:'10px'}}/>
            <Box>
              <Typography 
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: '700', 
                  fontSize: '25px', 
                  textAlign:'center',
                  fontFamily: 'Oswald'
                  }}>  
                  Be a part of something bigger
                </Typography>
              <Typography 
                sx={{
                    fontSize: '18px',
                    fontWeight: '400', 
                    marginBottom:'10px',
                    fontFamily: 'Oswald'

                }}>  
                Currently we are gathering new bylaw's courses. 
                If you are Class 26 or Class 27 student and want to contribute. Fill the follwing data and we will conatct you. 
              </Typography>

            </Box>
              <StudentForm/>
              <Typography 
              sx={{
                fontSize: '12px',
                marginBottom:'10px',
                fontFamily: 'Oswald'

              }}>  
                We appreciate and respect your time, and we assure you that this will not exceed a duration of 10 minutes.
              </Typography>
              <Divider sx={{marginBottom:'10px'}}/>

              <Typography              
                sx={{
                  fontSize: '15px',
                  color: '#FF0000',
                  fontFamily: 'Oswald'

                }}>  
               You can check for a course from the new bylaw by checking its alternative in the old bylaw if the credits are the same.
               <br/>
               Ex: If you want to check absence for EECS101 (New Bylaw) you can check for ELCN101 "Electronics-1 Basic Electronic Circuits" (Old Bylaw), 
               as the credits did not change from the old bylaw to the new one.
              </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
