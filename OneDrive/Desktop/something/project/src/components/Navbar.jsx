import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar } from '@mui/material';
import { Search as SearchIcon, Mail as MailIcon } from '@mui/icons-material';
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase placeholder="Search…" className="inputInput" inputProps={{ 'aria-label': 'search' }} />
        </div>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon sx={{ color: '#BDBDBD' }} />
          </Badge>
        </IconButton>
        <div className="profile">
          <Avatar alt="Username" src="/path/to/profile_pic.jpg" />
          <span style={{ marginLeft: '10px' }}>Username</span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
