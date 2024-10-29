import React from 'react';
import styled from 'styled-components';
import { useInfoValue } from '../contexts/InfoContext';
import { InputText } from '../common/InputText';
import { Accordion } from '../common/Accordion';
import { inputList } from '../common/InputList';
// import { Description } from '../../Common/Description';

export const Info = () => {
    const { data, updateInfo } = useInfoValue();

    return (
        <StyledInfo>
            <p>Enter the info you'd like to be displayed in your signature</p>
            {inputList.default.map(input => (
                <InputText
                    label={input.label}
                    name={input.name}
                    value={data[input.name]}
                    onBlur={updateInfo}
                    key={input.name}
                />
            ))}
            <Accordion title="Contact Info">
                {inputList.contact.map(input => (
                    <InputText
                        label={input.label}
                        name={input.name}
                        value={data[input.name]}
                        onBlur={updateInfo}
                        key={input.name}
                    />
                ))}
            </Accordion>
            <Accordion title="Social Media">
                {inputList.social.map(input => (
                    <InputText
                        label={input.label}
                        name={input.name}
                        value={data[input.name]}
                        onBlur={updateInfo}
                        key={input.name}
                    />
                ))}
            </Accordion>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    animation: flipdown 0.2s ease both;
`;
