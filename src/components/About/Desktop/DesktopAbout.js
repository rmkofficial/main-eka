import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const AboutSectionWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#4a4f57',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
    padding: theme.spacing(8, 0),
    color: '#fff',
}));

const AboutContent = styled(Container)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    alignItems: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
    height: '350px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'left',
    fontStyle: 'italic',
    lineHeight: 1.5,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
    color: '#2081C3',
}));

const Content = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    color: '#e0e0e0',
}));

const DesktopAbout = () => {
    const sections = [
        {
            type: 'text',
            title: 'Hakkımızda',
            content: 'Biz, eğitim ve danışmanlık alanında uzmanlaşmış bir ekibiz. Öğrencilere ve profesyonellere en iyi eğitimi sunmayı hedefliyoruz.',
        },
        {
            type: 'image',
            imageUrl: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?fit=crop&w=800&q=80',
        },
        {
            type: 'text',
            title: 'Misyonumuz',
            content: 'Misyonumuz, kaliteli eğitim ve danışmanlık hizmetleri sunarak bireylerin ve kurumların potansiyellerini maksimuma çıkarmalarına yardımcı olmaktır.',
        },
        {
            type: 'image',
            imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?fit=crop&w=800&q=80',
        },
        {
            type: 'text',
            title: 'Vizyonumuz',
            content: 'Vizyonumuz, global ölçekte tanınan ve güvenilen bir eğitim ve danışmanlık firması olmaktır. Yenilikçi yaklaşımlarımız ve müşteri odaklı hizmet anlayışımız ile öncü olmayı hedefliyoruz.',
        },
        {
            type: 'image',
            imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=800&q=80',
        },
    ];

    return (
        <AboutSectionWrapper>
            <Container sx={{ textAlign: 'center', marginBottom: 4 }} id="about-section">
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff' }}>
                    Eğitim Kariyer Akademisi
                </Typography>
            </Container>
            <AboutContent>
                {sections.map((section, index) => (
                    <StyledCard key={index}>
                        {section.type === 'text' ? (
                            <StyledCardContent>
                                <Title variant="h5" component="h2">
                                    {section.title}
                                </Title>
                                <Content variant="body1">
                                    {section.content}
                                </Content>
                            </StyledCardContent>
                        ) : (
                            <StyledCardMedia
                                component="img"
                                image={section.imageUrl}
                                alt={section.title}
                            />
                        )}
                    </StyledCard>
                ))}
            </AboutContent>
        </AboutSectionWrapper>
    );
};

export default DesktopAbout;
