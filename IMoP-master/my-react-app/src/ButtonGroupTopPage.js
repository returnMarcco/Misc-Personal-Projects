import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import HomePage from './HomePage';
import Carousel from './Carousel';

function BasicButtonGroup() {
  const [value, setValue] = useState("Home-Page");
  /* onClick, conditionally render components based on the value set by the useState hook
     Note:
     Conventional conditional statements cannot be used in JSX (as at now).
     Optionally, can pass the value via props to a child component, 
     where conventional conditional statements can be used in plain JavaScript to render components. 
  */
  
    return (
    <ButtonGroup sx={{ marginTop: 0.5, align: "centre", display: "block"}} className='button-group-top-style' variant="outlined" color="inherit" size="small" aria-label="outlined primary button group">
      <Button onClick={() => setValue("Home-Page")}> Home Page</Button>
      <Button onClick={() => setValue("Photo-Gallery")}>Photo Gallery</Button>
      
      {value === "Home-Page" && <HomePage />}
      {value === "Photo-Gallery" && <Carousel />}
    </ButtonGroup>
  );
}

export default BasicButtonGroup;