import { Outlet } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme()
theme.typography.h5 = {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#ee1d52'
}

theme.components = {
    MuiButton: {
        styleOverrides: {
            root: {
                // Some CSS
                fontSize: '0.9rem',
                fontWeight: 400,
                color: '#ee1d52'
            },
        },
    }
}

theme.palette.primary.main = '#fff';
theme.palette.secondary.main = '#ee1d52';

const Navbar = () => {
    return (  
        <>
            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="absolute" color="primary">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                    >
                        <SchoolSharpIcon />
                    </IconButton>
                    
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        studentBuzZ
                    </Typography>

                    <Button href="/" color="inherit">Student Login</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="inherit" href="/login-faculty">Faculty Login</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="inherit" href="/sign-up-uni">Join Us</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            </ThemeProvider>
            <Outlet />
        </>
    );
}
 
export default Navbar;