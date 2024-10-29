import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useControlValue } from '../contexts/ControlContext';
import Button  from '../common/Button';
import { TemplateOne } from '../Templates/Template-1'; 
import CopyToClipboard from '../common/CopyToClipboard'; // Ensure you're importing it as default

export const Preview = () => {
	const { data } = useControlValue();

	const currentTemplate = () => {
		switch (data.template) {
			case 'template1':
				return <TemplateOne />;
			
			default:
				return <TemplateOne />;
		}
	};

	return (
		<Fragment>
			<StyledPreview id="signatureMarkup">{currentTemplate()}</StyledPreview>
			<CopyToClipboard id="signatureMarkup" /> {/* Use the component here */}
		</Fragment>
	);
};

const StyledPreview = styled.article`
	margin-bottom: 3rem;
`;

export default Preview; // Exporting the component for use in other parts of your application
