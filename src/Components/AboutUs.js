import React from 'react';
import { Box, Typography, Container, Divider, Paper } from '@mui/material';
import { styled } from '@mui/system';

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
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Minerva Manpower Agency
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
            <Image src="https://example.com/image.jpg" alt="Minerva Manpower Agency" />
          </Paper>
          <Text variant="body1" paragraph>
            Minerva Manpower Agency, established in 2024, is dedicated to connecting skilled professionals with global opportunities. Our mission is to foster growth and development for both individuals and businesses through excellence in recruitment, training, and support services.
          </Text>
          <Text variant="body1" paragraph>
            Our core values are integrity, excellence, empathy, and innovation. We strive to uphold honesty and transparency in all our operations, ensuring the highest standards in service delivery. We understand and address the needs of both our clients and candidates, continuously improving to adapt to the changing job market.
          </Text>
          <Text variant="body1" paragraph>
            Minerva offers comprehensive recruitment services across various industries, tailored training programs to enhance skills, and ongoing career support including counseling and job matching. Our global reach focuses on Asia, Europe, and North America, aiming to be recognized as the leading manpower agency in the world.
          </Text>
        </Box>
      </Container>
    </BackgroundBox>
  );
};

export default About;
