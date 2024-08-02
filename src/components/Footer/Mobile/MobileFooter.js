import React from 'react';
import { Container, Typography, Box, TextField, Button, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../../Navbar/Logo';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link as ScrollLink } from 'react-scroll';

const FooterWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#131415',
    color: '#fff',
    padding: theme.spacing(4, 0),
    position: 'relative',
}));

const FooterContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row', 
    },
}));

const Column = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(0),
}));

const SocialMediaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: theme.spacing(2),
    '& a': {
        color: '#3F71A8',
        marginRight: theme.spacing(1),
        '&:hover': {
            color: '#fff',
        },
    },
}));

const NavLink = styled(Link)(({ theme }) => ({
    display: 'block',
    color: '#3F71A8',
    marginBottom: theme.spacing(3),
    textDecoration: 'none',
    '&:hover': {
        color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(1), 
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#3F71A8',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#3F71A8',
    },
}));

const IconLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    marginBottom: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
        color: '#fff',
    },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: '#3F71A8',
    '&:hover': {
        color: '#fff',
    },
}));

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: '#3F71A8',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
}));

const MobileFooter = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FooterWrapper>
            <Column>
                <Logo />
                <Typography variant="body1" mt={2} textAlign="center">
                    Biz, eğitim ve danışmanlık alanında uzmanlaşmış bir ekibiz. Öğrencilere ve profesyonellere en iyi eğitimi sunmayı hedefliyoruz.
                </Typography>
                <SocialMediaWrapper>
                    <Link href="https://www.facebook.com" target="_blank">
                        <SocialIconButton>
                            <FacebookIcon />
                        </SocialIconButton>
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank">
                        <SocialIconButton>
                            <TwitterIcon />
                        </SocialIconButton>
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank">
                        <SocialIconButton>
                            <InstagramIcon />
                        </SocialIconButton>
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <SocialIconButton>
                            <LinkedInIcon />
                        </SocialIconButton>
                    </Link>
                </SocialMediaWrapper>
            </Column>
            <Column>
                <Typography variant="h6" gutterBottom>
                    İletişim Bilgileri
                </Typography>
                <IconLink href="tel:+901234567890">
                    <PhoneIcon />
                    <Typography variant="body1" ml={1}>+90 123 456 7890</Typography>
                </IconLink>
                <IconLink href="mailto:info@example.com">
                    <EmailIcon />
                    <Typography variant="body1" ml={1}>info@example.com</Typography>
                </IconLink>
                <Box mt={2} textAlign="center">
                    <Typography variant="h6" gutterBottom>
                        Bülten Aboneliği
                    </Typography>
                    <TextField
                        label="E-posta adresiniz"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{
                            style: { color: '#fff', borderColor: '#ccc' },
                        }}
                    />
                    <StyledButton variant="contained" fullWidth>
                        Abone Ol
                    </StyledButton>
                </Box>
            </Column>
            <Box mt={2}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                    Navigasyon
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                        <NavLink component="span" sx={{ mx: 2 }}>Ana Sayfa</NavLink>
                    </ScrollLink>
                    <NavLink component="span" sx={{ mx: 2 }}>Hizmetler</NavLink>
                    <ScrollLink to="about-section" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                        <NavLink component="span" sx={{ mx: 2 }}>Hakkımızda</NavLink>
                    </ScrollLink>
                </Box>
            </Box>

            <ScrollToTopButton onClick={handleScrollToTop}>
                <ArrowUpwardIcon />
            </ScrollToTopButton>
        </FooterWrapper>
    );
};

export default MobileFooter;
