import React from 'react';
import { useControlValue } from '../contexts/ControlContext';
// import { Templates } from '../Templates';
// import { Info } from './Info';
// import { Styles } from './Styles';
// import { Collection } from './Collection';
import { Templates } from '../controls/Templates'; // Use curly braces for named export
import { Info } from './Info';
import { Styles } from './Styles';


export const CurrentControls = () => {
    const { data } = useControlValue();
    let currentControl;

    switch (data.control) {
        case 'templates':
            currentControl = <Templates />;
            break;
        case 'info':
            currentControl = <Info />;
            break;
        case 'styles':
            currentControl = <Styles />;
            break;
        // case 'collection':
        //     currentControl = <Collection />;
        //     break;
        default:
            currentControl = null; 
    }

    return currentControl;
};

export default CurrentControls; // Exporting the component for use in other parts of your application
