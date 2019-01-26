export const initialState = {};

		
export function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_PROFILE':
		    if (action.payload.user===undefined)
		        return null
            else
			    return (action.payload.user)

	default:
		return state;
	}
}