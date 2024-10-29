import React from 'react';
import { Controls } from './controls/Controls'; // Import your controls component
import { Canvas } from './canvas/Canvas'; // Import your canvas component
import { ControlProvider } from './contexts/ControlContext'; // Import the control context provider
import { InfoProvider } from './contexts/InfoContext'; // Import the info context provider

const SignatureBuilder = () => {
    return (
        <ControlProvider>
            <InfoProvider>
                <div className="flex h-screen">
                    <div className="w-1/4 p-4 bg-gray-100">
                        {/* Controls section */}
                        <Controls />
                    </div>
                    <div className="w-3/4 p-4 bg-white">
                        {/* Canvas section where the signature will be rendered */}
                        <Canvas />
                    </div>
                </div>
            </InfoProvider>
        </ControlProvider>
    );
};

export default SignatureBuilder;
