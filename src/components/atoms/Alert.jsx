import React from 'react';
import styled from '@emotion/styled';

const AlertContainer = styled.div`
    padding: 12px 16px;
    border-radius: 4px;
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
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
        <AlertContainer>
            <AlertIcon>⚠️</AlertIcon>
            {message}
        </AlertContainer>
    );
};

export default Alert;