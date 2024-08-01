import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const AboutSectionWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#4a4f57',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
    padding: theme.spacing(4, 0),
    color: '#fff',
}));

const AboutContent = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '100%',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 1.5,
    cursor: 'pointer',
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
    color: '#2081C3',
}));

const Content = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    color: '#e0e0e0',
}));

const MobileAbout = () => {
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
            <Container sx={{ textAlign: 'center', marginBottom: 4 }} id="about-header">
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#fff' }}>
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

export default MobileAbout;
