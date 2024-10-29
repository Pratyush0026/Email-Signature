import React from 'react';
import styled from 'styled-components';
import { Header } from './Header'; // Adjust the import path if necessary
import { Preview } from './Preview'; // Adjust the import path if necessary

export const Canvas = () => (
	<StyledCanvas>
		<Header />
		<Preview />
	</StyledCanvas>
);

const StyledCanvas = styled.article`
	padding: 1rem 3rem;
	grid-area: canvas;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Canvas; // Exporting the component for use in other parts of your application
