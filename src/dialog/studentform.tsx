
import React from "react";
import axios from "axios";
import { Box,MenuItem, FormControl, Select, InputLabel, TextField, Button, Alert}  from '@mui/material';

interface IStudentFormProps{
  label?: string;
  onClick?: () => void;
  sx?: React.CSSProperties;
}

const StudentForm: React.FC<IStudentFormProps> = (props: IStudentFormProps) => {
  const { label, onClick, sx} = props;

  const [major, setMajor] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [recevied, setReceived] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const majors = ["AET", "AEM", "CCE", "CEM", "CIE", "EEE", "HEM", "IEM", "MEE", "MEM", "MDE", "PPC", "SEE", "STE", "WEE"];

  const handleChange = (value: string) => {
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setPhone(value);
    }
  };
  const sendData = async () => {
    if (major.length === 0 || phone.length === 0){
      setError(true);
      return;
    }
    setReceived(true);
    setError(false);

    const data = {
      phoneNumber: "201141187015",
      text: "Major: " + major + ", Phone: " + phone,
      apiKey: "4429303"
    };

    try {
      const response = await axios.post('https://credithub.onrender.com/api/contact/volunteer', data);
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return(
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px 10px',
        width:'100%',
      }}>
        <FormControl>
          <InputLabel 
            sx={{
              color:'black', 
              fontFamily: 'Oswald',
              '&.Mui-focused': {
                color: 'black',
              },
              }}>
                Major
          </InputLabel>
          <Select
            value={major}
            label={"Major"}
            onChange={(event)=> setMajor(event.target.value)}
            sx={{
              '@media screen and (max-width: 768px)': { width:90 },
              width: 200,
              fontFamily: 'Oswald',
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: '1px solid black'},
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: '1px solid black',
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: '1px solid black',
                }
            }}
          >
           { 
            majors.map((major)=> <MenuItem sx={{fontFamily: 'Oswald'}} value={major}>{major}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl>
          <TextField 
            label=  'Phone Number'
            placeholder="Enter Your Number"
            onChange={(event)=> handleChange(event.target.value)}
            value={phone}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*'
            }}
            sx={{
              '@media screen and (max-width: 768px)': { width: 120 },

              '& .MuiInputLabel-root ': {
                color: 'black',
                fontFamily: 'Oswald'
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Oswald'
              },
              '& .MuiInput-underline:after': {
                border: '1px solid black',
              },
              '& .MuiOutlinedInput-root': {
                fontFamily: 'Oswald',

                '& fieldset': {
                  border: '1px solid black',
                  fontFamily: 'Oswald'

                },
                '&:hover fieldset': {
                  border: '1px solid black',

                },
                '&.Mui-focused fieldset': {
                  border: '1px solid black',
                },
              }
            }}
          />
        </FormControl>
      <Button
        onClick={recevied ? ()=>{return;} : sendData}
        sx={{
          backgroundColor: recevied ? '#04AA6D' : '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontFamily: 'Oswald',
          '&: hover': {
            transform: !recevied ? 'scale(1.02)' : "", 
            backgroundColor: !recevied ? '#3498db' : "#04AA6D", 
          }
        }}
      > 
      {recevied ? "Sent" : "Send"} 
      </Button>
      {error ? <Alert severity="warning">Please enter your major and your phone number. </Alert> : <></>}
    </Box>
  )
}

export default StudentForm; 