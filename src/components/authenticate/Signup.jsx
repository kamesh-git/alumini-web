import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import useFirebase from '../../context/useFirebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import LoginContextProvider from '../../context/LoginContextProvider';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
  const { auth, db } = useFirebase()
  const { setLogin } = useContext(LoginContextProvider)
  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'rollno', type: 'number', label: 'Roll No' },
    { name: 'courseperiod', type: 'text', label: 'Course period' },
    { name: 'mobile', type: 'tel', label: 'Mobile no' },
    { name: 'email', type: 'email', label: 'Mail id' },
    { name: 'linkedin', type: 'url', label: 'LinkedIn Id' },
    { name: 'current-password', type: 'password', label: 'Password' },

  ]
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = {}
    fields.map(item => details[item.name] = data.get(item.name))
    createUserWithEmailAndPassword(auth, details['email'], details['current-password']).then(user => {
      delete details['current-password']
      const docRef = doc(db, 'users', user.user.uid)
      setDoc(docRef, details).catch(err => setLogin(false))
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            DoIE Alumini Association
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={3}>
              {fields.map((item, index) =>
                <Grid key={index} item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type={item.type}
                    id={item.name}
                    label={item.label}
                    name={item.name}
                    autoComplete={false}
                    autoFocus
                    variant='standard'
                  />
                </Grid>)}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}