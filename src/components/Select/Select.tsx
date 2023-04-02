import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectLink } from './Select.styled';

export const SelectHome = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (e: any) => {
		setAge(e.target.value);
	};

	return (
		<Box
			sx={{
				maxWidth: '200px',
				marginRight: 'auto',
				marginLeft: 'auto',
				marginTop: '20px',
			}}
		>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">
					Viloyatlar
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Viloyatlar"
					onChange={handleChange}
				>
					<MenuItem value={10}>
						<SelectLink to="andijon">Andijon</SelectLink>
					</MenuItem>
					<MenuItem value={20}>
						<SelectLink to="buxoro">Buxoro</SelectLink>
					</MenuItem>
					<MenuItem value={30}>
						<SelectLink to="fargona">Farg'ona</SelectLink>
					</MenuItem>
					<MenuItem value={40}>
						<SelectLink to="jizzax">Jizzax</SelectLink>
					</MenuItem>
					<MenuItem value={50}>
						<SelectLink to="namangan">Namangan</SelectLink>
					</MenuItem>
					<MenuItem value={60}>
						<SelectLink to="qashqadaryo">Qashqadaryo</SelectLink>
					</MenuItem>
					<MenuItem value={70}>
						<SelectLink to="navoiy">Navoiy</SelectLink>
					</MenuItem>
					<MenuItem value={80}>
						<SelectLink to="samarqand">Samarqand</SelectLink>
					</MenuItem>
					<MenuItem value={90}>
						<SelectLink to="sirdaryo">Sirdaryo</SelectLink>
					</MenuItem>
					<MenuItem value={100}>
						<SelectLink to="toshkent">Toshkent viloyati</SelectLink>
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
