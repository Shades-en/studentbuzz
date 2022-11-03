import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Image from '../../assets/images/index/studentlaptop.jpg';

const theme = createTheme();

theme.palette.primary.main = '#000';
theme.palette.secondary.main = '#ee1d52';

theme.typography.h5 = {
    fontSize: '1.4rem',
    fontWeight: 700,
}

const CustomButton = styled(Button)`
  background-color: primary;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{
        display: 'flex',
        maxWidth: '100%!important',
        justifyContent: 'space-around!important',
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 13,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '27%',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </CustomButton>
            <Grid container>
              <Grid item xs>
                <CustomLink href="#" variant="body2">
                  {'Login as University?'}
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink href="#" variant="body2">
                  {'Login as Faculty?'}
                </CustomLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <img src={Image} style={{width: "50%", marginTop:"3em"}}  alt="" />
      </Container>
    </ThemeProvider>
  );
}