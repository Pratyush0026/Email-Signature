import React from 'react';
import styled from 'styled-components';
import { useControlValue } from '../contexts/ControlContext'; 
import { CurrentControls } from './CurrentControls';
import { InputRadio } from '../common/InputRadio'; 

export const Controls = () => {
	const { data, changeControl } = useControlValue();
	const controlTypes = ['templates', 'info', 'styles', 'collection'];

	return (
		<StyledControlsContainer>
			<StyledControls>
				{controlTypes.map(controlName => (
					<InputRadio
						label={controlName}
						name={controlName}
						checked={data.control === controlName} 
						onChange={changeControl}
						key={controlName}
					/>
				))}
			</StyledControls>
			<CurrentControls />
		</StyledControlsContainer>
	);
};

const StyledControlsContainer = styled.article`
	grid-area: form;
	display: flex;
	flex-direction: column;
	padding: 2rem 2.5rem 2rem 2rem;
	color: #e8e8e8;
	background-color: #5dade2;
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`;

const StyledControls = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	& > div {
		position: relative;
		flex: 1;
		text-align: center;
	}
	input[type='radio'] {
		position: absolute;
		top: auto;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		width: 1px;
		height: 1px;
		white-space: nowrap;
		&:checked + label::before {
			transform: translateY(0);
			opacity: 1;
			transition: transform 0.1s ease-out;
		}
	}
	label {
		display: block;
		position: relative;
		padding: 0.5rem;
		transition: background-color 0.1s ease-in-out;
		user-select: none;
		&:hover {
			cursor: pointer;
			background-color: rgba(232, 232, 232, 0.1);
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			transform: translateY(300%);
			
			width: 100%;
			height: 2px;
			background-color: #e8e8e8;
			opacity: 0;
			transition: opacity 0.2s ease-out, transform 0.2s ease-out;
		}
	}
`;

export default Controls; 
