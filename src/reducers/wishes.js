export const initialState = [{name: 'first', id: '0'}, {name: 'second', id: '1'}, {name: 'last', id: '2'}]

export function wishesReducer(state = initialState, action) {
	switch (action.type){
		case 'DEL_WISH':
			console.log(action.payload);
			return state.slice(0, action.payload).concat(state.slice(action.payload+1))
	
	
	default:
		return state;
	}
}
