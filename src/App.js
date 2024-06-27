import React from 'react'
import { useState,useEffect } from 'react';
import { ThemeProvider, CircularProgress, Box } from '@material-ui/core';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import {auth} from './firebase';
import theme from './theme';
const App = () => {
  const [user,setUser]=useState(null);
  const [initialLoad, setInitialLoad]=useState(true)
  useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    setUser(user);
    setInitialLoad(false);
  });
},[]);
// console.log(user);
if(initialLoad){ return(
  <Box mt={5} display="flex" justifyContent="center">
    <CircularProgress />
  </Box>
)}
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
  <Route path="/" element={user? <Navigate to="/account"/>:<Home/>}/>
  <Route path="/account" element={user? <Account/>:<Navigate to="/"/>}/>
  
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
