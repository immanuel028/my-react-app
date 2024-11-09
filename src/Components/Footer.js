import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const content = '2024 This is Template. All rights reserved'
const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Cinzel, serif', mb: 2 }}>
          &copy;  {content}.
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton color="inherit" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton color="inherit" href="mailto:email@email.com" rel="noopener noreferrer">
            <EmailIcon />
          </IconButton>
          <Typography variant="body2" sx={{ fontFamily: 'Cinzel, serif' }}>
            contact@email@email.com
          </Typography>
        </Box>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton color="inherit" href="tel:+1234567890" rel="noopener noreferrer">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body2" sx={{ fontFamily: 'Cinzel, serif' }}>
            +123-456-7890
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
