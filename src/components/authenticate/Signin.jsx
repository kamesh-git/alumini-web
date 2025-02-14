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
import LoginContextProvider from '../../context/LoginContextProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useFirebase from '../../context/useFirebase';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signin() {
  const { setLogin } = useContext(LoginContextProvider)
  const { auth } = useFirebase()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    signInWithEmailAndPassword(auth, email, password)

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: '100vh', margin: 'auto' }} alignItems={'center'} justifyContent={'space-around'}>
        <Grid item xs={12} sm={6}>
          <img style={{ width: '100%' }} src="/images/alumini.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent={'center'}>
                <Grid item>
                  <Link href='#' variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}