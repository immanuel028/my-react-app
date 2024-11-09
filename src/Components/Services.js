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
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac feugiat vehicula; velit amet nisi dapibus. Hac et metus est convallis efficitur ante eros tristique? Conubia diam semper vulputate et fringilla platea ut litora. Donec auctor integer faucibus habitant dapibus risus; mollis lacinia faucibus. Quam laoreet sollicitudin vitae lobortis bibendum nec cras. Cras ante senectus etiam fermentum malesuada volutpat.

            Convallis nulla velit leo etiam primis imperdiet conubia. Tortor non nullam blandit ultrices aliquam litora luctus praesent dignissim. Ultrices taciti sit malesuada vehicula, quis platea. Per mauris pulvinar tristique nisl faucibus. Pharetra sagittis semper gravida non maecenas efficitur habitant habitant mollis. Est maecenas quam class ex laoreet suscipit bibendum interdum. Nibh nisl lectus, nec sed efficitur in et. Vel nec iaculis ac donec gravida vestibulum quisque. Donec torquent interdum vulputate ex purus scelerisque.

            Dui viverra pretium fermentum efficitur phasellus sociosqu, taciti feugiat id. Euismod taciti ac mollis ultricies mus ad blandit. Rutrum mus ac egestas eu, cubilia ante netus. Condimentum magnis accumsan rutrum mollis adipiscing rutrum penatibus elit. Aliquet ad penatibus justo, nisl pharetra tellus. Velit nam pretium maximus convallis risus nibh adipiscing, euismod imperdiet. Finibus id dictum fusce dui volutpat tempor id congue. Porta vel rutrum magnis varius habitasse justo. Enim pharetra posuere purus bibendum pretium erat iaculis tempor senectus.

            Cursus pellentesque nullam pharetra dignissim interdum. Vehicula mattis nisi nunc purus fermentum maecenas nulla dapibus. Auctor est in venenatis magna ridiculus magna dictum. Nibh amet turpis blandit est lectus nibh, habitant potenti. Praesent porttitor fermentum sem; nam ipsum etiam duis. Ultrices augue dolor turpis volutpat non.

            Neque amet rhoncus habitant eu nascetur. Sapien semper enim suscipit eros nullam convallis laoreet. Ac euismod convallis ornare dignissim nisl sit suspendisse volutpat vehicula. Feugiat sollicitudin elementum amet lacus phasellus montes tincidunt. Venenatis nam nisl velit nascetur dui. Phasellus inceptos urna dictum integer quis. Vulputate fringilla platea posuere habitant fames ac sapien rutrum. Et euismod tellus volutpat magnis ipsum nam fermentum felis taciti.

            Ligula sed proin nec efficitur auctor ultricies. Egestas dictum massa penatibus lobortis eget. Placerat finibus facilisis felis tristique imperdiet in? Elementum dui amet imperdiet ultricies consequat venenatis at. Purus porttitor sapien; vel curabitur pharetra dignissim. Pellentesque nulla sodales euismod suspendisse nibh penatibus senectus. Nec ut id ad interdum venenatis dapibus mauris faucibus. Facilisis ligula nam placerat at turpis.

            Est velit auctor hac fringilla velit platea sed luctus. Vivamus diam massa morbi; potenti nibh facilisi viverra vehicula est. Ultricies condimentum dui dolor, quam pulvinar litora finibus pellentesque vulputate. Lacus tempor aptent massa primis sociosqu pellentesque placerat. Potenti imperdiet praesent non finibus risus vitae non. In urna lobortis pulvinar, eget fusce amet quis. Habitant non lacus lectus vehicula per posuere vehicula semper. Id tempus suspendisse sodales eget pellentesque.

            Magna cursus tincidunt et non volutpat. Aliquam pretium hac duis fames suscipit pulvinar dui mi. Malesuada senectus nam sodales suspendisse finibus per leo. Nascetur nunc auctor praesent maecenas vel laoreet cras hendrerit. Magnis scelerisque urna donec ridiculus fames, commodo odio. Consectetur metus per senectus vel, mus ligula nibh. Sodales ullamcorper rhoncus lobortis justo gravida habitant.

            Maximus ornare tristique sem neque est; aliquet sed facilisi venenatis. Nulla tellus ornare fames mollis dictum sit luctus. Potenti a scelerisque cubilia; et taciti magna libero. Montes integer montes natoque massa ante. Adipiscing montes pellentesque semper curabitur risus mattis fringilla semper. Inceptos ipsum arcu magna primis pharetra odio facilisi.

            Pellentesque molestie urna tempor lorem eros efficitur urna volutpat. Pulvinar euismod orci nam efficitur convallis consequat est scelerisque. Placerat vulputate mauris vel orci congue volutpat varius inceptos donec. Duis euismod tellus scelerisque ridiculus non bibendum penatibus. Egestas ornare diam aenean sociosqu lacus; libero lobortis! Facilisi tincidunt justo vitae primis at cursus lacinia quis. Nibh inceptos non commodo dapibus netus. Tempor elementum laoreet platea eget dapibus, luctus ac ullamcorper.
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
