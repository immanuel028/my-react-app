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
          Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus neque tempus a sapien tortor. Tortor tincidunt eleifend tellus luctus faucibus dapibus habitasse. Nisl est dignissim condimentum venenatis enim odio ipsum donec. Suscipit lectus volutpat; cursus vel consectetur ante? Dis tellus taciti sapien ad per felis consectetur felis hac?

        Etiam semper nisi ornare magnis magnis ultricies non. Consectetur facilisi congue posuere eleifend leo adipiscing, tortor nascetur class. Himenaeos imperdiet id sit iaculis a malesuada dapibus. Est eros consequat enim aenean quisque potenti nisi fermentum. Gravida natoque ad convallis; eu suspendisse magnis. Quam hendrerit etiam tempus erat pharetra volutpat est. Vulputate sed lacinia sagittis volutpat bibendum enim et commodo.

        Vitae aptent ante in senectus suspendisse a volutpat lobortis quisque. Tincidunt semper ac in laoreet sagittis nisi commodo sollicitudin per. Leo tristique maximus placerat cubilia eget ut nascetur adipiscing. Nam vitae quisque vehicula, phasellus adipiscing nunc. Imperdiet conubia sem porta tincidunt; laoreet torquent posuere. Nibh duis curae taciti magna orci. Sociosqu vitae vestibulum luctus dictumst augue fames. At penatibus posuere nisi in pellentesque non elit. Potenti dis etiam nulla metus in vel mattis curae convallis. Lectus phasellus facilisi amet dis bibendum elit.

        Congue tempor auctor hendrerit nullam bibendum nostra praesent. Himenaeos suscipit class neque curabitur, porttitor bibendum. Sed non aenean, venenatis potenti risus maximus. Rhoncus pellentesque erat aliquet hac in morbi. Etiam neque facilisis ad suscipit dolor maximus. Morbi dapibus sem phasellus class himenaeos tempus montes. Tortor elit porttitor conubia, vivamus platea hac maximus nostra conubia. Facilisis placerat justo turpis rhoncus potenti tristique senectus. Nascetur suscipit potenti sagittis penatibus nascetur ullamcorper pellentesque lorem.</p>
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
