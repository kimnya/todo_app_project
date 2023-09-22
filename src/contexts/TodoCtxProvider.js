import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from '../reducers/todoReducer';

let todoState = localStorage.getItem('todoState');

if (todoState !== null) {
	todoState = JSON.parse(todoState); //불러온 데이터가 문자열이므로 객체로 변환
} else {
	//프로젝트에서 로컬스토리지에 저장할 초기 데이터
	// state = {
	// 	username: '둘리',

	// 	Dday: [{ id: 0, tit: '취업준비', date: new Date('2023-8-10').valueOf() }],
	// 	nextDdayId: 1,

	// 	todos: [{ id: 0, tit: '입사지원', complete: false }],
	// 	nextTodoId: 1,
	// };
	todoState = {
		username: '',

		Dday: [],
		nextDdayId: 0,

		todos: [],
		nextTodoId: 0,
	};
}

const CtxState = createContext(null);
export const useCtxState = () => {
	const context = useContext(CtxState);
	if (!context) {
		throw new Error('Provider 래핑을 하지않은 컴포넌트에서 사용하였습니다.');
	}
	return context;
};

const CtxDispatch = createContext(null);

export const useCtxDispatch = () => {
	const context = useContext(CtxDispatch);
	if (!context) {
		throw new Error('Provider 래핑을 사용하지 않은 컴포넌트에서 사용했습니다. ');
	}
	return context;
};
const TodoCtxProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, todoState);
	return (
		<>
			<CtxState.Provider value={state}>
				<CtxDispatch.Provider value={dispatch}>{children}</CtxDispatch.Provider>
			</CtxState.Provider>
		</>
	);
};

export default TodoCtxProvider;
