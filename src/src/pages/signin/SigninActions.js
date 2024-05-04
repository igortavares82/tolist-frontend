export function Authenticated(value) {
    
    return {
        type: SigninReducerType.AUTHENTICATED,
        payload: value
    }
}