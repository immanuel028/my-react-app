import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';
import DetailButton from './DetailButton'; // Ensure this path is correct

const Home = () => {
  const WelcomeText = styled(Typography)({
    marginBottom: '16px',
    fontFamily: 'Playfair Display, serif',
  });

  const HomeButton = styled(Button)({
    margin: '8px',
    fontFamily: 'Cinzel, serif',
  });

  const BackgroundBox = styled(Box)({
    backgroundImage: `url('/home-background.jpg')`, // Ensure this path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
  });

  return (
    <BackgroundBox id="home">
      <Container maxWidth="sm" sx={{ textAlign: 'center', paddingTop: '20vh' }}>
        <WelcomeText variant="h4">
          Welcome to Minerva Manpower Agency
        </WelcomeText>
        <Box>
          <HomeButton variant="contained" color="primary">
            Get Started
          </HomeButton>
          <Link to="about" smooth={true} duration={500}>
            <HomeButton variant="outlined" color="primary">
              Learn More
            </HomeButton>
          </Link>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
          <DetailButton /> {/* Add the DetailButton component */}
        </Box>
      </Container>
    </BackgroundBox>
  );
};

export default Home;
