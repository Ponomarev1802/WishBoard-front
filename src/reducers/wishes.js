export const initialState = [
	{
        id: 0,
		name: 'first'
	}, {
		id: 1,
		name: 'second'
	}, {
        id: 2,
		name: 'last'
	}
];

export function wishesReducer(state = initialState, action) {
	switch (action.type) {
		case 'DEL_WISH':
			console.log(action.payload);
			return state.slice(0, action.payload).concat(state.slice(action.payload+1))
	default:
		return state;
	}
}
