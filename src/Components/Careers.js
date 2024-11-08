import React from 'react';
import { Box, Typography, Container, Paper, Grid, Button ,Divider} from '@mui/material';
import { styled } from '@mui/system';

const JobItem = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  background: 'rgba(255,255,255,0.9)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Careers = () => {
  const jobs = [
    {
      title: 'Nail Technician',
      description: 'Develop and maintain web applications.',
      location: 'Remote',
      applyUrl: '#',
    },
    {
      title: 'Project Manager',
      description: 'Coordinate and oversee project development.',
      location: 'New York, NY',
      applyUrl: '#',
    },
    {
      title: 'HR Specialist',
      description: 'Manage recruitment and employee relations.',
      location: 'London, UK',
      applyUrl: '#',
    },
    // Add more job listings as needed
  ];

  return (
    <Box sx={{ backgroundImage: `url('/careers-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', padding: '4vh',textAlign: 'center',  }} id="careers">
      <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
            Careers 
          </Typography>
          <Divider sx={{ my: 4 }} />
          <p variant="body1" paragraph>
          A Nail Technician is a skilled beauty professional specializing in nail care and design. Their primary responsibilities include performing manicures and pedicures, applying artificial nails, and enhancing natural nails through a variety of techniques. They shape, file, buff, and polish nails, while also applying nail art, gel, or acrylic overlays based on client preferences.

Nail Technicians also advise clients on nail and hand care, educate them on hygiene practices, and help them choose nail products suited to their needs. They often work in salons, spas, or independently, maintaining a clean and organized workspace to ensure client safety and satisfaction. A good nail tech is attentive to detail, creative, and possesses strong customer service skills, creating a welcoming atmosphere that leaves clients feeling pampered and valued.

Additionally, Nail Technicians stay current with industry trends, tools, and health standards, and may participate in ongoing education or certification programs to enhance their expertise. Their goal is to provide high-quality, personalized services that enhance clients’ confidence and satisfaction.
          </p>
        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
              <JobItem elevation={3}>
                <Typography variant="h6" component="h2" sx={{ fontFamily: 'Cinzel, serif' }}>
                  {job.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {job.description}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                  Location: {job.location}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} href={job.applyUrl}>
                  Apply Now
                </Button>
              </JobItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Careers;
