import React from 'react';
import styled from '@emotion/styled';

const AlertContainer = styled.div`
    padding: 12px 16px;
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.warningBg || '#fff3cd'};
    border: 1px solid ${p => p.theme.colors.warningBorder || '#ffeaa7'};
    color: ${p => p.theme.colors.warningText || '#856404'};
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const AlertIcon = styled.span`
    margin-right: 8px;
    font-size: 16px;
`;

const Alert = ({ message }) => {
    return (
        <AlertContainer role="status" aria-live="polite">
            <AlertIcon aria-hidden>⚠️</AlertIcon>
            <div>{message}</div>
        </AlertContainer>
    );
};

export default Alert;