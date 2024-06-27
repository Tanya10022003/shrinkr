import React from 'react'
import {useState, Fragment} from 'react'
import {Grid,Box,Typography,Button,Divider} from "@material-ui/core";
import Navbar from "./Navbar";
import ShortenURLModel from "./ShortenURLModel"
import LinkCard from "./LinkCard";
const dummyData=[
  {
    id:'31r08ms0fam',
    createdAt: new Date(),
    name:'My Website',
    longURL:'https://google.com',
    shortCode: 'masdo',
    totalClicks:313
  },
  {
    id:'31r08asdasfam',
    createdAt: new Date(),
    name:'E-book',
    longURL:'https://drive.google.com/asdokasnd89',
    shortCode: '182as',
    totalClicks:32
  },
  {
    id:'asdasfam',
    createdAt: new Date(),
    name:'E-book',
    longURL:'https://drive.google.com/asdokasnd89',
    shortCode: '182as',
    totalClicks:32
  }
]
const Account = () => {
  const [openModal,setOpenModal]=useState(false);
  const[links,setLinks]=useState(dummyData)
  return (
    <>
      {openModal && <ShortenURLModel handleClose={()=>setOpenModal(false)} />}
      <Navbar/>  
      <Box>
      <Grid container justifyContent='center' style={{marginTop:'40px'}}>
         <Grid item xs={8}>
          <Box style={{marginBottom:'40px',display:"flex"}}>
            <Box style={{marginRight:'40px'}}>
            <Typography variant="h4">Links</Typography>
            </Box>
            <Button onClick={()=>setOpenModal(true)} disableElevation variant="contained"color="primary">Create new</Button>
          </Box>
          {links.map((link,idx) => (
            <Fragment key={link.id}>
          <LinkCard {...link}/>
          { idx!==links.length-1&&(
            <Box style={{marginTop:'20px',marginBottom:'20px'}}>
          <Divider/>
          </Box>
)}
          </Fragment>
          ))}
         </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Account
