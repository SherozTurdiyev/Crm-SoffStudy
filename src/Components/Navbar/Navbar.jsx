import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link, link } from 'react-router-dom'




const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '50%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar position="static"> */}
        <Toolbar sx={{ width: "70%", marginLeft: "40px" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Salom Sheroz 👋
            </div>
          </Typography>
          <DarkModeIcon style={{ margin: "10px" }} />
          <Link to='/Registratsiya'><AddCircleIcon style={{ color: "#7E7E7E", marginTop: "5px" }} /></Link>
          <AddAlertIcon style={{ margin: "10px" }} />
          <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              style={{ boxShadow: "0px 10px 60px rgba(226, 236, 249, 0.5) ",borderRadius: "12px"}}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
        </Toolbar>
        {/* </AppBar> */}
      </Box>
    </div>
  );
}

export default Navbar;
