import React from 'react'
import{Toolbar,AppBar,Button,Box,Typography} from'@material-ui/core'
const Navbar = () => {
  return (
     <AppBar elevation={0} color="secondary" position="static">
      <Toolbar>
          <Typography variant="h6">Shrinkr</Typography>
          <Box style={{marginLeft:'auto'}} >
          
          <Button  color="inherit">Links</Button>
          <Button  color="inherit">Logout</Button>
          </Box>
      </Toolbar>
  </AppBar> 
  )
}

export default Navbar
