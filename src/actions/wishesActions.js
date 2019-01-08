export function delWish(key){
	return {
		type: 'DEL_WISH',
		payload: key,
	}

}
