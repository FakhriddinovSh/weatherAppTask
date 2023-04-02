import { Box, Typography } from '@mui/material';
import { Header } from '../../components/Header/Header';
import {
	InfoCount,
	InfoDesc,
	InfoItem,
	InfoList,
	Main,
	Sidebar,
	WeatherCount,
	WeatherCountWrap,
	WeatherWrapper,
} from './Home.styled';
import { SelectHome } from '../../components/Select/Select';
import { BASE_URL, API_KEY } from '../../data/URL';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
	const params = useParams();
	const region = params['*'];
	const [data, setData] = useState();
	const [headerData, setHeaderData] = useState('');

	// Debounce function
	function debounce(func: Function, delay: number) {
		let timeoutId: number;
		return (...args: any[]) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => func(...args), delay);
		};
	}

	const headerResult = (text: string) => {
		useEffect(() => {
			const delayedSearch = debounce(() => {
				axios
					.get(
						`${BASE_URL}/weather?q=${text}&appid=${API_KEY}&units=metric`,
					)
					.then((res) => {
						if (res.status === 200) {
							setData(res.data);
						}
					})
					.catch((err) => console.log(err));
			}, 2000);
			delayedSearch();
		}, [text]);
	};

	headerResult(headerData);

	if (region === '') {
		useEffect(() => {
			axios
				.get(
					`${BASE_URL}/weather?q=tashkent&appid=${API_KEY}&units=metric`,
				)
				.then((res) => setData(res.data))
				.catch((err) => console.log(err));
		}, []);
	} else {
		useEffect(() => {
			axios
				.get(
					`${BASE_URL}/weather?q=${region}&appid=${API_KEY}&units=metric`,
				)
				.then((res) => setData(res.data))
				.catch((err) => console.log(err));
		}, [region]);
	}

	return (
		<>
			<Header setData={setHeaderData} />
			<Main>
				<Sidebar>
					<Typography
						textAlign={'center'}
						variant="h4"
						component="h2"
					>
						Viloyatlar
					</Typography>
					<SelectHome />
				</Sidebar>
				<WeatherWrapper>
					<Box>
						<Typography variant="h4" component="h2">
							{data?.name}
						</Typography>
						<WeatherCountWrap>
							<WeatherCount>
								{Math.round(data?.main?.temp) + ''}
							</WeatherCount>{' '}
							c
						</WeatherCountWrap>
					</Box>
					<InfoList>
						<InfoItem>
							<InfoDesc>Humidity</InfoDesc>
							<InfoCount>{data?.main?.humidity} %</InfoCount>
						</InfoItem>
						<InfoItem>
							<InfoDesc>Wind Speed</InfoDesc>
							<InfoCount>{data?.wind?.speed}</InfoCount>
						</InfoItem>
						<InfoItem>
							<InfoDesc>Visibility</InfoDesc>
							<InfoCount>{data?.visibility}</InfoCount>
						</InfoItem>
					</InfoList>
				</WeatherWrapper>
			</Main>
		</>
	);
};
