import React from 'react';
import { Box, Typography, Container, Grid, Paper ,Divider} from '@mui/material';
import { styled } from '@mui/system';

const ImageItem = styled(Paper)({
  padding: '10px',
  textAlign: 'center',
  color: '#fff',
  background: 'rgba(0,0,0,0.6)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Gallery = () => {
  const images = [
    { src: '/images/gallery1.jpg', alt: 'Gallery Image 1', description: 'Our team at the annual company retreat' },
    { src: '/images/gallery2.jpg', alt: 'Gallery Image 2', description: 'Celebrating our latest project launch' },
    { src: '/images/gallery3.jpg', alt: 'Gallery Image 3', description: 'Our modern office workspace' },
    { src: '/images/gallery1.jpg', alt: 'Gallery Image 4', description: 'Our team at the annual company retreat' },
    { src: '/images/gallery2.jpg', alt: 'Gallery Image 5', description: 'Celebrating our latest project launch' },
    { src: '/images/gallery3.jpg', alt: 'Gallery Image 6', description: 'Our modern office workspace' },
    // Add more images as needed
  ];

  return (
    <Box sx={{ backgroundImage: `url('/gallery-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', padding: '4vh' }} id="gallery">
      <Container maxWidth="lg" sx={{ color: 'Black' }}>
      <Typography variant="h4" component="h1" gutterBottom>
            Gallery 
          </Typography>
          <Divider sx={{ my: 4 }} />
          <p variant="body1" paragraph>
          A Nail Technician is a skilled beauty professional specializing in nail care and design. Their primary responsibilities include performing manicures and pedicures, applying artificial nails, and enhancing natural nails through a variety of techniques. They shape, file, buff, and polish nails, while also applying nail art, gel, or acrylic overlays based on client preferences.

Nail Technicians also advise clients on nail and hand care, educate them on hygiene practices, and help them choose nail products suited to their needs. They often work in salons, spas, or independently, maintaining a clean and organized workspace to ensure client safety and satisfaction. A good nail tech is attentive to detail, creative, and possesses strong customer service skills, creating a welcoming atmosphere that leaves clients feeling pampered and valued.

Additionally, Nail Technicians stay current with industry trends, tools, and health standards, and may participate in ongoing education or certification programs to enhance their expertise. Their goal is to provide high-quality, personalized services that enhance clients’ confidence and satisfaction.
          </p>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ImageItem elevation={3}>
                <img src={image.src} alt={image.alt} style={{ width: '100%', borderRadius: '8px' }} />
                <Typography variant="body1" sx={{ marginTop: '10px', fontFamily: 'Cinzel, serif' }}>
                  {image.description}
                </Typography>
              </ImageItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
