import React from 'react';
import { Container, Typography, Box, TextField, Button, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#70747a',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
    padding: theme.spacing(8, 0),
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}));

const ContactContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 'lg',
    minHeight: '500px',
    padding: '0 16px', 
}));

const SectionWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
}));

const FormWrapper = styled(SectionWrapper)(({ theme }) => ({}));

const ContactInfoWrapper = styled(SectionWrapper)(({ theme }) => ({}));

const SocialMediaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
    '& a': {
        color: '#fff',
        marginBottom: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& a:hover': {
        color: '#3F71A8',
    },
    '& .MuiIconButton-root': {
        color: '#3F71A8',
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-input': {
        color: '#fff',
    },
    '& .MuiInputLabel-root': {
        color: '#ccc',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ccc',
        },
        '&:hover fieldset': {
            borderColor: '#2081C3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2081C3',
        },
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#3F71A8',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#2081C3',
    },
}));

const MobileContact = () => {
    return (
        <ContactWrapper>
            <ContactContainer maxWidth="lg" id='contact-header'>
                <FormWrapper>
                    <Typography variant="h4" gutterBottom>
                        İletişim
                    </Typography>
                    <StyledTextField label="Ad" fullWidth variant="outlined" />
                    <StyledTextField label="Soyad" fullWidth variant="outlined" />
                    <StyledTextField label="E-posta" fullWidth variant="outlined" />
                    <StyledTextField label="Mesaj" fullWidth variant="outlined" multiline rows={4} />
                    <StyledButton variant="contained">Gönder</StyledButton>
                </FormWrapper>
                <ContactInfoWrapper>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            İletişim Bilgileri
                        </Typography>
                        <Box display="flex" alignItems="center" mb={2}>
                            <PhoneIcon />
                            <Link href="tel:+901234567890" color="inherit" underline="none" ml={1}>
                                <Typography variant="h6">+90 123 456 7890</Typography>
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <EmailIcon />
                            <Link href="mailto:info@example.com" color="inherit" underline="none" ml={1}>
                                <Typography variant="h6">info@example.com</Typography>
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <WhatsAppIcon />
                            <Link href="https://wa.me/901234567890" color="inherit" underline="none" ml={1}>
                                <Typography variant="h6">WhatsApp ile iletişim</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                            Bize Ulaşın
                        </Typography>
                        <SocialMediaWrapper>
                            <Link href="https://www.facebook.com" target="_blank">
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <Typography variant="body1" ml={1}>Facebook</Typography>
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank">
                                <IconButton>
                                    <TwitterIcon />
                                </IconButton>
                                <Typography variant="body1" ml={1}>Twitter</Typography>
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank">
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                                <Typography variant="body1" ml={1}>Instagram</Typography>
                            </Link>
                            <Link href="https://www.linkedin.com" target="_blank">
                                <IconButton>
                                    <LinkedInIcon />
                                </IconButton>
                                <Typography variant="body1" ml={1}>LinkedIn</Typography>
                            </Link>
                        </SocialMediaWrapper>
                    </Box>
                </ContactInfoWrapper>
            </ContactContainer>
        </ContactWrapper>
    );
};

export default MobileContact;
