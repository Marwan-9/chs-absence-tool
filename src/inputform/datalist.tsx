import React, { forwardRef, useImperativeHandle, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { styled } from '@mui/system';

export interface course {
  name: string;
  prerequisiteHours: number;
  code: string;
  credits: number;
}

interface IDataListProps {
  onChoose: (chosenCourse: course) => void;
}

const DataList = forwardRef((props: IDataListProps, ref) => {
  const { onChoose } = props;
  
  const [options, setOptions] = React.useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<course | null>(null); 

  const onChooseCourse = (option: course) => {
    onChoose(option);
    setSelectedCourse(option);
  };



const GroupHeader = styled('div')(({ theme }) => ({
  padding: '4px 10px',
  fontFamily:'Oswald',
  color: 'black',
  fontWeight: 500
}));

const GroupItems = styled('ul')({
  padding: '0',
  color: 'black',
  fontFamily:'Oswald'
});
  const fetchDataFromAPI = async (searchTerm: string) => {
    try {
      const response = await axios.get(`https://credithub.onrender.com/api/courses/search/${searchTerm}`);
      setOptions(response.data);
    } 
    catch (error) {
      setOptions([]);
    }
  };

  const onClear = () => {
    setOptions([]);
    setSelectedCourse(null);
  };
  useImperativeHandle(ref, () => ({ onClear }));

  return (
    <Autocomplete
      options={options}
      groupBy={(option) => option.code.slice(0, -3)}
      getOptionLabel={(option) => option.code + ": " + option.name}
      onChange={(_, chosenCourse) => onChooseCourse(chosenCourse)}
      onInputChange={(_, value) => fetchDataFromAPI(value)}
      renderInput={(params) => <TextField {...params} />}
      value={selectedCourse} // Set the selected value
      disableClearable={true} 
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      sx={{
        width: '300px',
        fontFamily: 'Oswald',
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: '1px solid black'},
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
            border: '1px solid black',
          },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border: '1px solid black',
          },
          "&. MuiAutocomplete-inputFocused":{
            border: '1px solid black',
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border: '1px solid black'
          },
          "& MuiAutocomplete-groupLabel":{
            fontFamily: 'Oswald ',
            fontWeight:'700'
          },

        "& .MuiInputBase-root": {
          fontFamily: 'Oswald',
          height: "35px !important",
          padding: 0,
          paddingLeft: '5px'
        },
      }}
    />
  );
});
export default DataList;