import React from 'react';
import styled from 'styled-components';

export const Header = () => {
	return (
		<StyledHeader>
			<h1>Signature Generator</h1>
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	margin-bottom: 8rem;
	text-align: center;
	font-size: 14px;

	h1 {
		font-size: 45px;
		margin: 1rem 0 0;
	}
`;

export default Header; 
