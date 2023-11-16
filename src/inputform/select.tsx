import * as React from 'react';
import {Box,MenuItem, FormControl, Select, SelectChangeEvent, InputLabel}  from '@mui/material';

interface IBasicSelectProps {
  label?: string;
  options: string[];
  selectedOption: string;
  onSelect: (selected: string) => void;
  disabled?:  boolean;
}
const BasicSelect: React.FC<IBasicSelectProps> = (props: IBasicSelectProps) => {
  const { label, options, selectedOption, onSelect, disabled = true } = props;

  const handleChange = (event: SelectChangeEvent) => {
    onSelect(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel> {/* Add the label here */}
        <Select
          disabled = {disabled}
          value={selectedOption}
          defaultValue={options[0]}
          onChange={handleChange}
          sx={{
            fontFamily: 'Oswald',
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: '1px solid black'},
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                border: '1px solid black',
              },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                border: '1px solid black',
              },
            '& .MuiSelect-select': {
              height: '0px !important',
              paddingLeft:'10px',
              padding:'5px 10px'
            },
            '& .MuiInputBase-root': {
              padding:'20px',
              fontFamily: 'Oswald',

            }
          }}
        >
        {
          options.map((value) => ( 
            <MenuItem value={value} sx={{fontFamily: 'Oswald'}}>{value}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </Box>
  );
}
export default BasicSelect;