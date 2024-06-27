import React from 'react'
import {useState} from "react";
//import { useHistory } from 'react-router-dom';
import {TextField,Button,Typography} from '@material-ui/core'
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Home = () => {
  const [form,setForm]=useState({
    email:'',
    password:'',
  });
 // const history = useHistory(); // Hook to get the history object for navigation
  const handleChange =(event)=>{
    setForm((oldForm)=>({
      ...oldForm,
      [event.target.name]:event.target.value,
    }));
  };
    const handleSignup=async()=>{
      try {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        console.log('User signed up:', auth.currentUser);
        //history.push('/account'); // Navigate to the account page
      } catch (error) {
        console.error('Error signing up:', error);
      }
      // await auth.createUserWithEmailAndPassword(form.email,form.password);
    };
   //console.log(auth.currentUser);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSignup = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log('User signed up:', userCredential);
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //   }
  // };
  return (
    <>
    <Typography>Home</Typography>
    <TextField 
    value={form.email}
    name="email"
    onChange={handleChange}
    label="Email"
    />
    <TextField 
    type="password"
    value={form.password}
    name="password"
    onChange={handleChange}
    label="Password"
    />
    <Button onClick={handleSignup}> Sign up</Button>
    </>
  );
};


export default Home;
