import React from 'react';
import { Box, Typography, Container, Paper,Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';

const ServiceItem = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  color: '#fff',
  background: 'rgba(0,0,0,0.6)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Services = () => {
  const services = [
    {
      title: 'Recruitment Services',
      description: 'Connecting top talent with leading companies across the globe.',
      imageUrl: '/images/recruitment.jpg', // Update with the correct path to your image
    },
    {
      title: 'Training Programs',
      description: 'Enhancing skills through tailored training sessions.',
      imageUrl: '/images/training.jpg', // Update with the correct path to your image
    },
    {
      title: 'Career Support',
      description: 'Providing ongoing career counseling and job matching services.',
      imageUrl: '/images/career.jpg', // Update with the correct path to your image
    },
    // Add more services as needed
  ];

  return (
    <Box sx={{ backgroundImage: `url('/services-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', padding: '4vh' }} id="services">
      <Container maxWidth="lg" sx={{ color: 'Black' }}>
      <Typography variant="h4" component="h1" gutterBottom>
            Our Services 
          </Typography>
          <Divider sx={{ my: 4 }} />
          <p variant="body1" paragraph>
          A Nail Technician is a skilled beauty professional specializing in nail care and design. Their primary responsibilities include performing manicures and pedicures, applying artificial nails, and enhancing natural nails through a variety of techniques. They shape, file, buff, and polish nails, while also applying nail art, gel, or acrylic overlays based on client preferences.

Nail Technicians also advise clients on nail and hand care, educate them on hygiene practices, and help them choose nail products suited to their needs. They often work in salons, spas, or independently, maintaining a clean and organized workspace to ensure client safety and satisfaction. A good nail tech is attentive to detail, creative, and possesses strong customer service skills, creating a welcoming atmosphere that leaves clients feeling pampered and valued.

Additionally, Nail Technicians stay current with industry trends, tools, and health standards, and may participate in ongoing education or certification programs to enhance their expertise. Their goal is to provide high-quality, personalized services that enhance clients’ confidence and satisfaction.
          </p>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceItem elevation={3}>
                <img src={service.imageUrl} alt={service.title} style={{ width: '100%', borderRadius: '8px' }} />
                <Typography variant="h6" component="h2" sx={{ mt: 2, fontFamily: 'Cinzel, serif' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              </ServiceItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
