import React from "react";
import { Box, Typography, Button} from '@mui/material';
import DataList, {course} from "./datalist";
import BasicSelect from "./select";

interface IFormResult {
  courseID: string;
  credits: number;
  missedLecs: number;
  missedTuts: number;
}
interface IDataListRef {
  onClear: () => void;
}
interface IInputFormProps {
  onFormSumbit: (formData: IFormResult) => void;
  onFormClear: () => void;
}
const InputForm : React.FC<IInputFormProps> = (props: IInputFormProps) => {
  const { onFormSumbit, onFormClear  } = props;

  const [lecturesCount, setLecturesCount] = React.useState<string>("0");
  const [tutsCount, setTutsCount] = React.useState<string>("0");
  const [chosenCourse, setChosenCourse] = React.useState<course>();
  const dataListRef = React.useRef<IDataListRef | null>(null); 

  console.log(chosenCourse?.code.slice(0,3))
  const onClear = () => {
    onFormClear();
    setLecturesCount("0")
    setTutsCount("0")
    setChosenCourse(undefined)
    if (dataListRef.current) 
      dataListRef.current.onClear();
  }

  const onSubmit = () => {
    const sumbitResult: IFormResult = {
      courseID: chosenCourse?.code ? chosenCourse?.code : "" ,
      credits: chosenCourse?.credits ? chosenCourse?.credits  : -1,
      missedLecs: parseInt(lecturesCount),
      missedTuts: parseInt(tutsCount)
    }
    onFormSumbit(sumbitResult)
  }

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '10px',
        background: '#D2D6DA',
        boxSizing: 'border-box',
        padding: '20px 25px',
        gap: '10px 0px',
        maxWidth:'100%',
        height:'fit-content',
        '@media screen and (max-width: 768px)': { flex: 1 }

      }}>
    
      <Typography sx={{fontSize:'25px', fontWeight:'500', fontFamily:'Oswald'}}>
        Check Your Absence 
      </Typography>
      <Box sx={{display:'flex'}}> 
        <Typography sx={{minWidth:'30%', fontFamily:'Oswald'}}>
          Course Name: 
        </Typography>
        <DataList 
          ref={dataListRef} 
          onChoose={(chosen) => setChosenCourse(chosen)}
        />
      </Box>

      <Box sx={{display:'flex'}}> 
        <Typography sx={{width:'30%', fontFamily:'Oswald'}}>
          Absent Lecs: 
        </Typography>
        <BasicSelect  
          disabled = {false}
          options={["0", "1", "2", "3", "4", "5", "6"]} 
          onSelect={(selected)=>setLecturesCount(selected)} 
          selectedOption={lecturesCount}
          />
      </Box>

      <Box sx={{display:'flex'}}> 
        <Typography sx={{width:'30%', fontFamily:'Oswald'}}>
          Absent Tuts: 
        </Typography>
        <BasicSelect 
          disabled = {false}
          options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} 
          onSelect={(selected)=>setTutsCount(selected)}
          selectedOption={tutsCount}
          />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button 
          onClick={onClear} 
          sx={{
            background: '#000028',
            fontFamily: 'Oswald',
            color: 'White',
            padding: '5px 20px',
            transition: 'transform 0.2s ease', // Add a transition for the 'transform' property
            '&:hover': {
              background: '#000028',
              transform: 'scale(1.05)', 
              color: 'White'
            }
          }}>
          Clear 
        </Button>
        <Button 
          onClick={onSubmit}
          sx={{
            background: '#04AA6D',
            fontFamily: 'Oswald',
            color: 'White',
            padding: '5px 20px',

            transition: 'transform 0.2s ease', // Add a transition for the 'transform' property
            '&:hover': {
              background: '#04AA6D',
              transform: 'scale(1.05)', 
              color: 'White'
            }
          }}>
          Check
        </Button>
      </Box>
    </Box>
  );
}
export default InputForm;