export function getUser(userObj){
	return {
		type: 'GET_USER',
		payload: userObj,
	}

}
