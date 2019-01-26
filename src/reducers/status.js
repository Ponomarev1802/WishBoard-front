export const initialState = {auth: true};


export function statusReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_PROFILE':
			return (action.payload.status);

	default:
		return state;
	}
}