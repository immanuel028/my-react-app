import React from 'react';
import { Box, Typography, Container, Divider, Paper } from '@mui/material';
import { styled } from '@mui/system';

const company ="{Company Name}"
const contentAboutus = "About this template can modify"


const About = () => {
  const Image = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });

  const Text = styled(Typography)({
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    '&:hover': {
      opacity: 0.9,
      transform: 'translateY(-5px)',
    },
  });

  const BackgroundBox = styled(Box)({
    backgroundImage: `url('/about-background.jpg')`, // Ensure this path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '4vh',
  });

  return (
    <BackgroundBox id="aboutus">
      <Container maxWidth="md">
        <Box sx={{ color: 'black' }}>
          <Typography variant="h4" component="h1" gutterBottom>
           {contentAboutus}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
            <Image src="https://example.com/image.jpg" alt={company} />
          </Paper>
          <Text variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          </Text>
          <Text variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Container>
    </BackgroundBox>
  );
};

export default About;
