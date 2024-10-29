import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import  CopyToClipboard  from '../common/CopyToClipboard';

export const ControlContext = createContext({});

export const ControlProvider = ({ children }) => {
    const [state, setState] = useState({
        control: 'templates',
        template: 'template1',
        collection: [],
    });

    const changeControl = (e) => {
        setState((prevState) => ({
            ...prevState,
            control: e.target.value,
        }));
    };

    const changeTemplate = (e) => {
        setState((prevState) => ({
            ...prevState,
            template: e.target.value,
        }));
    };

    const saveToCollection = (collectionItem) => {
        setState((prevState) => ({
            ...prevState,
            collection: [...prevState.collection, collectionItem.innerHTML],
        }));
    };

    const copyItem = (item) => {
        CopyToClipboard(item.id);
        item.addEventListener('mouseleave', () => {
            setTimeout(() => {
                item.dataset.copy = 'copy';
            }, 200);
        });
        item.dataset.copy = 'copied!';
        item.style = '';
        // eslint-disable-next-line no-void
        void item.offsetWidth;
        item.style.animation = 'copied 1s forwards';
    };

    return (
        <ControlContext.Provider
            value={{
                data: state,
                changeControl,
                changeTemplate,
                saveToCollection,
                copyItem,
            }}
        >
            {children}
        </ControlContext.Provider>
    );
};

export const useControlValue = () => useContext(ControlContext);

ControlProvider.propTypes = {
    children: PropTypes.node,
};
