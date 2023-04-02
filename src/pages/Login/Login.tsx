import axios from 'axios';
import { useFormik } from 'formik';
import { useRef } from 'react';
import {
	LoginButton,
	LoginErrorSpan,
	LoginForm,
	LoginInput,
	LoginRightWrapper,
	LoginTitle,
} from './Login.styled';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const user_email = useRef('');
	const user_password = useRef('');
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			axios
				.post('https://reqres.in/api/Login', {
					email: values.email,
					password: values.password,
				})
				.then((res) => {
					if (res.status === 200) {
						window.localStorage.setItem('token', res?.data?.token);
						navigate('/');
						window.location.reload();
					}
				})
				.catch((err) => console.log(err));
		},
		validate: (values) => {
			let errors = {} as any;
			if (!values.email) {
				errors.email = 'Email required';
			}
			if (!values.password) {
				errors.password = 'Password required';
			}
			return errors;
		},
	});

	return (
		<LoginRightWrapper>
			<LoginTitle>Login</LoginTitle>
			<LoginForm
				onSubmit={(evt: any) => {
					evt.preventDefault();
					formik.handleSubmit();
				}}
			>
				<LoginInput
					ref={user_email}
					type="email"
					placeholder="Email"
					name="email"
					id="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email ? (
					<LoginErrorSpan>{formik.errors.email}</LoginErrorSpan>
				) : null}
				<LoginInput
					ref={user_password}
					type="password"
					placeholder="Password"
					name="password"
					id="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.password && formik.errors.password ? (
					<LoginErrorSpan>{formik.errors.password}</LoginErrorSpan>
				) : null}
				<LoginButton type="submit">Login</LoginButton>
			</LoginForm>
		</LoginRightWrapper>
	);
};
