import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
    const [state, setState] = useState({
        portrait: '',
        logo: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        department: '',
        companyName: '',
        officePhone: '',
        mobilePhone: '',
        websiteUrl: '',
        emailAddress: '',
        address: '',
        socialLinkedin: '',
        socialFacebook: '',
        socialTwitter: '',
        socialInstagram: '',
        accentColor: '#000',
        socialColor: '#000',
    });

    const updateInfo = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const updateAccentColor = (color) => {
        setState((prevState) => ({
            ...prevState,
            accentColor: color,
        }));
    };

    const updateSocialColor = (color) => {
        setState((prevState) => ({
            ...prevState,
            socialColor: color,
        }));
    };

    return (
        <InfoContext.Provider
            value={{
                data: state,
                updateInfo,
                updateAccentColor,
                updateSocialColor,
            }}
        >
            {children}
        </InfoContext.Provider>
    );
};

export const useInfoValue = () => useContext(InfoContext);

InfoProvider.propTypes = {
    children: PropTypes.node,
};
