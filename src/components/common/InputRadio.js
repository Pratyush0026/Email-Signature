import React from 'react';
import styled from 'styled-components';

export const InputRadio = ({ name, checked, onChange, label }) => (
    <StyledRadio>
        <input
            type="radio"
            name={name}
            value={name}
            checked={checked === name}
            onChange={onChange}
            id={name}
        />
        <label htmlFor={name}>{label}</label>
    </StyledRadio>
);

const StyledRadio = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    & > input {
        margin-right: 0.5rem;
    }
`;

export default InputRadio;
