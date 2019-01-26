export function delWish(key){
	return {
		type: 'DEL_WISH',
		payload: key,
	}
}

export function getProfile(profile) {
	return{
		type: 'GET_PROFILE',
		payload: profile,
	}
}

export function SignInSubmit(user, pass) {
	return{
		type: 'LOGIN_REQUEST',
		payload: {user: user, pass: pass}
	}
}