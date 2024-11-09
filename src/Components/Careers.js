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
    <Box sx={{ backgroundImage: `url('/careers-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', padding: '4vh', }} id="careers">
      <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
            Careers 
          </Typography>
          <Divider sx={{ my: 4 }} />
          <p variant="body1" paragraph>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus neque tempus a sapien tortor. Tortor tincidunt eleifend tellus luctus faucibus dapibus habitasse. Nisl est dignissim condimentum venenatis enim odio ipsum donec. Suscipit lectus volutpat; cursus vel consectetur ante? Dis tellus taciti sapien ad per felis consectetur felis hac?

        Etiam semper nisi ornare magnis magnis ultricies non. Consectetur facilisi congue posuere eleifend leo adipiscing, tortor nascetur class. Himenaeos imperdiet id sit iaculis a malesuada dapibus. Est eros consequat enim aenean quisque potenti nisi fermentum. Gravida natoque ad convallis; eu suspendisse magnis. Quam hendrerit etiam tempus erat pharetra volutpat est. Vulputate sed lacinia sagittis volutpat bibendum enim et commodo.

        Vitae aptent ante in senectus suspendisse a volutpat lobortis quisque. Tincidunt semper ac in laoreet sagittis nisi commodo sollicitudin per. Leo tristique maximus placerat cubilia eget ut nascetur adipiscing. Nam vitae quisque vehicula, phasellus adipiscing nunc. Imperdiet conubia sem porta tincidunt; laoreet torquent posuere. Nibh duis curae taciti magna orci. Sociosqu vitae vestibulum luctus dictumst augue fames. At penatibus posuere nisi in pellentesque non elit. Potenti dis etiam nulla metus in vel mattis curae convallis. Lectus phasellus facilisi amet dis bibendum elit.

        Congue tempor auctor hendrerit nullam bibendum nostra praesent. Himenaeos suscipit class neque curabitur, porttitor bibendum. Sed non aenean, venenatis potenti risus maximus. Rhoncus pellentesque erat aliquet hac in morbi. Etiam neque facilisis ad suscipit dolor maximus. Morbi dapibus sem phasellus class himenaeos tempus montes. Tortor elit porttitor conubia, vivamus platea hac maximus nostra conubia. Facilisis placerat justo turpis rhoncus potenti tristique senectus. Nascetur suscipit potenti sagittis penatibus nascetur ullamcorper pellentesque lorem.
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
