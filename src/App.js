import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/AboutUs';
import Careers from './Components/Careers';
import Services from './Components/Services';
import Gallery from './Components/Gallery';


const pages = ['Home', 'About Us', 'Services', 'Careers', 'Gallery', 'Contact Us'];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {pages.map((page, index) => (
          <ListItem button key={index}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header handleDrawerToggle={handleDrawerToggle} pages={pages} />
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Home />
      <About /> {/* Optional: Include this if you have the About component */}
      <Services /> {/* Optional: Include this if you have the About component */}
      <Careers /> {/* Optional: Include this if you have the Careers component */}
      <Gallery /> {/* Optional: Include this if you have the Careers component */}
      <Footer />
    </Box>
  );
}

export default App;
