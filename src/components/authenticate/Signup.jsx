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
import { Menu, MenuItem, Select, TextareaAutosize } from '@mui/material';
import Formelements from '../Others/FormElements';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
  const { auth, db } = useFirebase()
  const { setLogin, user } = useContext(LoginContextProvider)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = {}
    fields.map(item => details[item.name] = data.get(item.name))
    console.log(details)
    const docRef = doc(db, 'users', user.uid)
    setDoc(docRef, details).then(val => setLogin(2)).catch(err => setLogin(1))
  };
  const fields = [
    { elem: "input", name: 'firstname', type: 'text', label: 'First Name', xs: 6, autoFocus: true },
    { elem: "input", name: 'lastname', type: 'text', label: 'Last Name', xs: 6 },
    { elem: "date", name: 'DOB', type: 'date', label: 'DOB' },
    { elem: "input", name: 'rollno', type: 'number', label: 'Roll No' },
    { elem: "input", name: 'mobile', type: 'tel', label: 'Mobile no' },
    { elem: "input", name: 'branch', type: 'text', label: 'Branch' },
    { elem: "input", name: 'linkedin', type: 'url', label: 'LinkedIn Id' },
    { elem: "title", title: 'Course Period' },
    { elem: "select", name: 'courseperiodfrom', type: 'text', label: 'From', xs: 6, options: [...Array(5).keys()].map(val => val + 2023).reverse() },
    { elem: "select", name: 'courseperiodto', type: 'text', label: 'To', xs: 6, options: [...Array(5).keys()].map(val => val + 2023).reverse() },
    { elem: "input", name: 'address', type: 'text', label: 'Address' },
    { elem: "title", title: 'Company' },
    { elem: "select", name: 'companycountry', type: 'text', label: 'Company Country', xs: 6, options: [...Array(5).keys()].map(val => val + 2023).reverse() },
    { elem: "select", name: 'companystate', type: 'text', label: 'Company State', xs: 6, options: [...Array(5).keys()].map(val => val + 2023).reverse() },

  ]

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
                <Grid sx={{ paddingTop: item.elem === 'select' && '2px!important' }} key={index} item xs={item.xs || 12}>
                  <Formelements item={item} />
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