import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
`;

const Copyright = styled.p`
    margin: 0;
    font-size: 0.875rem;
    color: #666;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const SocialLink = styled.a`
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>&copy; 2023 Emotion Design System. All rights reserved.</Copyright>
            <SocialLinks>
                <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
            </SocialLinks>
        </FooterContainer>
    );
};

export default Footer;