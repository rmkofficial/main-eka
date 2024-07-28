import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/hero1.jpg';
import { HeroSection, HeroContentWrapper, HeroTitle, HeroButton } from './HeroStyles';

const Hero = ({ topSpacing = '0', leftSpacing = '0' }) => {
    return (
        <HeroSection>
            <Image
                src={heroImage}
                alt="Hero Image"
                fill
                style={{ objectFit: 'cover', zIndex: -1 }}
                quality={100}
                priority
            />
            <HeroContentWrapper>
                <HeroTitle variant="h2" component="h1" gutterBottom topSpacing={topSpacing} leftSpacing={leftSpacing}>
                    Geleceğinizi İnşa Edin
                </HeroTitle>
                <HeroButton variant="contained" color="primary">
                    Daha Fazla Bilgi
                </HeroButton>
            </HeroContentWrapper>
        </HeroSection>
    );
};

export default Hero;
