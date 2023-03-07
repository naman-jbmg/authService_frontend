
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert,InputLabel,Select,MenuItem ,FormControl} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      title:data.get('title'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      role:data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('confirmPassword'),
      tc: data.get('acceptTerms'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit} >
    
    <div style={{marginTop:0}}>
    <InputLabel id="for_Title" style={{alignSelf:'center',fontSize:'2vh'}}>Title</InputLabel>
    <Select
        style={{marginTop:16,height:40}}
        labelId="for_Title"
        id="demo-simple-select"
        value='bnvc'
        label="Title"
        
      >
        <MenuItem value="Mr.">
          Mr.
        </MenuItem>
        <MenuItem value='Mrs'>Mrs.</MenuItem>
        
      </Select>
      <TextField  sx={{
        "& .MuiInputBase-root": {
            height: 40
        }
    }}  style={{marginLeft:4}} margin='normal' required  id='firstName' name='firstName' label='First Name' />
      
      <TextField  sx={{
        "& .MuiInputBase-root": {
            height: 40
        }
    }} style={{marginLeft:3}}  margin='normal' required  id='lastName' name='lastName' label='Last Name' />
    </div>
      {/* <TextField margin='normal' required fullWidth id='role' name='role' label='Role' /> */}
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <TextField margin='normal' required fullWidth id='password_confirmation' name='confirmPassword' label='Confirm Password' type='password' />
      <InputLabel id="for_Role">Role</InputLabel>

      <Select
        labelId="for_Role"
        id="select-small"
        // value={}
        
        label="Role"
       
      >
        <MenuItem value="User">
          User
        </MenuItem>
        <MenuItem value='Admin'>Admin</MenuItem>
        <MenuItem value='HR'>HR</MenuItem>
        <MenuItem value='Manager'>Manager</MenuItem>
      </Select>
      
      <FormControlLabel style={{marginLeft:30}} control={<Checkbox value="true" color="primary" name="acceptTerms" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}

      {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Age"
   
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}
    </Box>
  </>;
};

export default Registration;





