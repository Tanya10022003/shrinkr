import React from 'react'
import {useState} from 'react';
import {TextField,Dialog,DialogTitle,DialogContent,DialogActions,Box,Button,IconButton} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons'
const ShortenURLModel = ({ handleClose}) => {
   const [form,setForm]=useState({
    name:'',
    longUrl:'',
   })
    const handleChange =(event)=>
        setForm((oldForm)=>({
          ...oldForm,
          [event.target.name]:event.target.value,
        }));
    return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
        Create New URL
        <IconButton onClick={handleClose} size="small">
        <CloseIcon/>
        </IconButton>
        </Box>
        </DialogTitle>
    <DialogContent>
        <Box mb={3}>
        <TextField value={form.name} name="name" onChange={handleChange} fullwidth variant="filled" label="Name"/>
        </Box>
        <TextField value={form.longUrl} name="longUrl" onChange={handleChange} fullwidth variant="filled" label="Long URL"/>
    </DialogContent>
    <DialogActions>
        <Box mr={2} my={1}>
        <Button onClick={()=>console.log(form)} color="primary" variant="contained" disableElevation> Shorten URL</Button>
    </Box>
    </DialogActions>
    </Dialog>
  )
}

export default ShortenURLModel
