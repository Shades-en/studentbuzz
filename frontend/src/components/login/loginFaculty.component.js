import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Image from '../../assets/images/index/faculty.jpg';


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

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (  
        <>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                        my: 16,
                        mx: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <CustomLink href="#" variant="body2" sx={{alignSelf: "flex-start", textDecoration: "underline"}}>
                            Student Login
                        </CustomLink>
                        <br />
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Faculty Sign In
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                Sign in as a University?
                            </CustomLink>
                            </Grid>
                            <Grid item>
                            {/* <CustomLink href="#" variant="body2">
                                Sign in as a University?
                            </CustomLink> */}
                            </Grid>
                        </Grid>
                        
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}
 
export default Login;