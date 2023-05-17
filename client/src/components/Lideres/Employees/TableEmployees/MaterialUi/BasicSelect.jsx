import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const StyledMenuItem = styled(MenuItem)(() => ({
	backgroundColor: '#39394b',
	'&:hover': {
		backgroundColor: '#3f3f4f',
	},
	color: '#fff',
	'&.Mui-selected': {
		backgroundColor: '#3f3f4f',
	},
}));

const StyledInputLabel = styled(InputLabel)(() => ({
	color: '#fff',
}));

const StyledSelect = styled(Select)(() => ({
	'& .MuiSelect-icon': { color: '#fff' },
	'& .MuiInputBase-input': { color: '#fff' },
}));

const StyledFormControl = styled(FormControl)(() => ({
	backgroundColor: '#39394b',
	'& .MuiInputLabel-formControl': {
		color: '#fff',
	},
	'& .MuiInputLabel-formControl': {
		color: '#fff',
	},
}));

export default function BasicSelect({employees, setEmployees}) {

	const handleChange = (event) => {
		setEmployees(event.target.value);
	};

	return (
		<Box sx={{ width: '50%' }}>
			<StyledFormControl fullWidth>
				<StyledInputLabel id='demo-simple-select-label'>
					Employees
				</StyledInputLabel>
				<StyledSelect
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={employees}
					label='Employees'
					onChange={handleChange}>
					<StyledMenuItem value={'c-level'}>C-Level</StyledMenuItem>
					<StyledMenuItem value={'leader'}>Leader</StyledMenuItem>
					<StyledMenuItem value={'corredor'}>Corredor</StyledMenuItem>
					<StyledMenuItem value={'vendedor'}>Vendedor</StyledMenuItem>
				</StyledSelect>
			</StyledFormControl>
		</Box>
	);
}
