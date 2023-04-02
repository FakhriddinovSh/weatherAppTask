import './app.css';
import { Home } from './pages/Home/Home';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';

export const App = (): JSX.Element => {
	const token = window.localStorage.getItem('token');
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/*" element={token ? <Home /> : <Login />}></Route>
			</Routes>
		</QueryClientProvider>
	);
};
