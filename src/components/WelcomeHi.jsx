import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useUserHooks from './../useHooks/useUserHooks';
import Home from '../pages/Home';

const Container = styled.div`
	width: 300px;
	height: 300px;
	margin: 20% auto;
	text-align: center;
`;

const Form = styled.form``;

const Welcome = styled.p`
	width: 250px;
	height: 36px;
	margin: 0 auto;
	line-height: 40px;
	font-weight: 600;
	font-size: 24px;
	text-align: center;
`;

const Name = styled(Welcome)`
	margin: 20px 0 80px;
	color: #a799ff;
	border: none;
	border-bottom: 1px solid #aaa;
	outline: none;
`;

const Start = styled(Welcome)`
	width: 230px;
	color: #fff;
	background-color: #a799ff;
	font-size: 16px;
	border: none;
	border-radius: 50px;
`;

const WelcomeHi = ({ submitFn, on }) => {
	const [name, changeFn] = useUserHooks();

	return (
		<>
			<Container className={on ? 'off' : 'on'}>
				<Form onSubmit={submitFn}>
					<label htmlFor="username"></label>
					<Welcome>What’s your name?</Welcome>
					<Name onChange={changeFn} id="username" as="input" value={name} />
					<Start as="button">START</Start>
				</Form>
			</Container>
		</>
	);
};

export default WelcomeHi;
