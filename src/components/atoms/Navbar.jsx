import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

const Nav = styled.nav`
    display:flex; align-items:center; justify-content:space-between; padding:12px 16px; background: transparent;
`;
const Logo = styled.div`
    display:flex; align-items:center; gap:8px; color: ${p => p.theme.colors.textPrimary}; font-weight:700;
`;
const Links = styled.ul`
    list-style:none; display:flex; gap:16px; margin:0; padding:0; align-items:center;
`;
const Link = styled.a`
    color: ${p => p.theme.colors.muted}; text-decoration:none; &:hover{ color: ${p => p.theme.colors.textPrimary}; }
`;

export default function Navbar(){
    return (
        <Nav role="navigation" aria-label="Main navigation">
            <Logo>
                <img src={logo} alt="Logo" style={{width:36,height:36}} />
                <span>emotion-design-system</span>
            </Logo>
            <Links>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/components">Components</Link></li>
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/about">About</Link></li>
            </Links>
        </Nav>
    )
}