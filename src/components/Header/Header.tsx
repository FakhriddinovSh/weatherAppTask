import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { HeaderSearchOption, HeaderSearchOptionItem } from './Header.styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

interface HeaderProps {
	setData: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ setData }) => {
	const [countrie, setCountrie] = React.useState();
	const [optionOpen, setOptionOpen] = React.useState('false');

	const countries = [
		{ name: 'Andijon' },
		{ name: 'Buxoro' },
		{ name: "Farg'ona" },
		{ name: 'Jizzax' },
		{ name: 'Namangan' },
		{ name: 'Qashqadaryo' },
		{ name: 'Navoiy' },
		{ name: 'Samarqand' },
		{ name: 'Sirdaryo' },
		{ name: 'Surxondaryo' },
		{ name: 'Toshkent' },
	];

	function searchCountries(searchText: string) {
		const filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().includes(searchText.toLowerCase()),
		);
		setCountrie(filteredCountries);
	}

	return (
		<Box sx={{ flexGrow: 1, borderBottom: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
						}}
					>
						WeatherApp
					</Typography>
					<Search style={{ position: 'relative' }}>
						<StyledInputBase
							placeholder="Search…"
							id="header-search"
							onKeyUp={(e) => {
								const target = e.target as HTMLInputElement;
								const value = target.value;

								searchCountries(value);
								setOptionOpen('true');
								setData(value);
								if (!value.length) {
									setOptionOpen('false');
								}
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
						<HeaderSearchOption display={optionOpen}>
							{countrie?.map((item: any) => (
								<HeaderSearchOptionItem
									onClick={() => {
										setData(item.name);
										const input = document.querySelector(
											'#header-search',
										) as HTMLInputElement;
										input.value = item.name;
										setOptionOpen('false');
									}}
								>
									{item.name}
								</HeaderSearchOptionItem>
							))}
						</HeaderSearchOption>
					</Search>
					<Stack
						direction="row"
						spacing={2}
						style={{
							border: '1px solid #000',
							borderRadius: '5px',
							marginLeft: '15px',
						}}
					>
						<Button
							onClick={() => {
								localStorage.removeItem('token');
								window.location.reload();
							}}
							style={{ color: '#000' }}
						>
							Log out
						</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
