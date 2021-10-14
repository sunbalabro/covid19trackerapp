import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../../style/nav.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
 
      <AppBar  position="static">
        <Toolbar>


          Covid 19 Tracker
          <>
            <Button style={{ color: "white", fontWeight: 'bold' }} size="medium">
            <Link to='/'>Home</Link>  
            </Button>
            <Button style={{ color: "white", fontWeight: 'bold' }} size="medium">
            <Link to='/States'>States</Link>
            </Button>
          </>


        </Toolbar>
      </AppBar>
   );
}
