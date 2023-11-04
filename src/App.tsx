import React from "react";
import InputForm from "./inputform/inputform";
import OutputField from "./outputfield/outputfield";
import NavBar from "./navbar/navbar";
import {Box} from '@mui/material';
import KeepMountedModal from "./dialog/modal";
import { CalculateAbsense, Result } from "./utlis/computeRemaining";
import Footer from "./footer/footer";


const App : React.FC = () => {
  const [result, setResult] = React.useState<Result>({firstWarning:-1, secondWarning:-1, deprivedFlag:-1, possibleCombinations:[]});
  
  return (
    <div style={{fontFamily: 'Barlow', display:'flex', flexDirection:'column'}} >
      <NavBar/>
      <KeepMountedModal/>
      <Box sx={{
        display:'flex',
        maxWidth:'100%',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        gap:'20px 100px',
        '@media screen and (max-width: 768px)': { padding: '0px 10px' }
      }}>
        <InputForm  
          onFormSumbit={(x)=> setResult(CalculateAbsense(x.courseID, x.credits, x.missedLecs, x.missedTuts))}
          onFormClear={()=>setResult({firstWarning:-1, secondWarning:-1, deprivedFlag:-1, possibleCombinations:[]})}
          />
        <OutputField data={result}/>
      </Box>
      <Footer/>

    </div>
  );
}

export default App;