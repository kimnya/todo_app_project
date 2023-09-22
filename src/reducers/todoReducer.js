export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				friends: state.friends.concat(action.data),
			};
		default:
			return state;
	}
};
