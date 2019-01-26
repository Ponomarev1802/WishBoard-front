export const initialState = [

];

export function wishesReducer(state = initialState, action) {
	switch (action.type) {
		case 'DEL_WISH':
			return state.slice(0, action.payload).concat(state.slice(action.payload+1))
		case 'GET_PROFILE':
			if (action.payload.wishes===undefined)
		        return null
            else
			    return (action.payload.wishes)


	default:
		return state;
	}
}
