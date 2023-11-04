import React from "react";
import { Button } from '@mui/material';

interface IButtonProps{
  label: string;
  onClick: () => void;
  sx: React.CSSProperties;
}

const CustomButton: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { label, onClick, sx} = props;
  return(

    <Button 
      onClick={onClick} 
      sx={{
        
      }}
    >
      {label}
    </Button>
  )
}

export default CustomButton;