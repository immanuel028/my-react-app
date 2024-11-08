import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Header = ({ handleDrawerToggle, pages }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Playfair Display, serif' }}>
          Minerva Manpower Agency
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {pages.map((page, index) => (
            <Link
              key={ 2}
              to={page.toLowerCase().replace(/\s+/g, '')}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button color="inherit" sx={{ fontFamily: 'Cinzel, serif' }}>
                {page}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
