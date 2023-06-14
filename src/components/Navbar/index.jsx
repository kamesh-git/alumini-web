import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Menu, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link as RouterLink } from 'react-router-dom';
import LoginContextProvider from '../../context/LoginContextProvider';
import { signOut } from 'firebase/auth'
import useFirebase from '../../context/useFirebase';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuopen = Boolean(anchorEl);
    const { setLogin } = React.useContext(LoginContextProvider)
    const { auth } = useFirebase()

    const handleLogout = () => {
        signOut(auth)
        menuhandleClose()
    }
    const menuhandleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuhandleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                DoIE
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <RouterLink key={item} style={{ textDecoration: 'none', color: 'inherit' }} to={`/${item}`}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </RouterLink>
                ))}
                <RouterLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/profile'}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Profile'} />
                        </ListItemButton>
                    </ListItem>
                </RouterLink>
                <ListItem onClick={handleLogout} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position='sticky'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        DoIE
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <RouterLink key={item} style={{ textDecoration: 'none', color: 'inherit' }} to={`/${item}`}>
                                <Button sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            </RouterLink>
                        ))}
                        <Button
                            id="basic-button"
                            aria-controls={menuopen ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={menuopen ? 'true' : undefined}
                            onClick={menuhandleClick}
                        >
                            <Avatar sx={{ bgcolor: 'transparent' }}>
                                <AccountCircleOutlinedIcon />
                            </Avatar>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={menuopen}
                            onClose={menuhandleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <RouterLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/Profile'}>
                                <MenuItem onClick={menuhandleClose}>Profile</MenuItem>
                            </RouterLink>
                            <RouterLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </RouterLink>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor='right'
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}