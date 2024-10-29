import React from 'react';
import styled from 'styled-components';

// Primary Button Component
export const Button = ({ onClick, children }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
);

// Secondary Button Component
export const ButtonSecondary = ({ onClick, children }) => (
    <StyledButton secondary onClick={onClick}>
        {children}
    </StyledButton>
);

// Styled Button Component with styled-components
const StyledButton = styled.button`
    outline: none;
    border: 1px solid transparent;
    background-color: ${props => (props.secondary ? '#fff' : '#504a65')};
    color: ${props => (props.secondary ? '#504a65' : '#fff')};
    font-family: inherit;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: color 0.1s ease-out, border-color 0.1s ease-out,
        background-color 0.1s ease-out;

    &:hover {
        background-color: #696284;
        color: ${props => (props.secondary ? '#fff' : '')}; // Ensure correct CSS formatting
    }

    &:active {
        background-color: #504a65;
    }
`;

export default Button; // Export the Button component
