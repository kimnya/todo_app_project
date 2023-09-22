import React, { useState } from 'react';

const useUserHooks = () => {
	const [name, setName] = useState('둘리');

	const changeFn = (evt) => {
		setName((prev) => evt.target.value);
	};

	const [show, setShow] = useState(false);
	const showFn = (evt) => {
		evt.preventDefault();
		setShow(!show);
	};

	return [name, changeFn, showFn];
};

export default useUserHooks;
