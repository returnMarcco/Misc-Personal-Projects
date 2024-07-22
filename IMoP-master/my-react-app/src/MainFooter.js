import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MainFooter() {
  return (
  <Box className='main-footer-box-style' sx={{ width: '100%', maxWidth: '100%', align: "centre"}}>
      <Typography className='main-footer-text-style' variant="h4" align="centre" gutterBottom>
        <p className='dob-style'>Until We Meet Again..</p>
      </Typography>
    </Box>
  );
}

export default MainFooter;