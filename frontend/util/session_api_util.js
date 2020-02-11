import AJAX from './ajax_util';


export const signup = async (user) => {
    return await AJAX.post('api/users', user);
}

export const login = async (user) => {
    return await AJAX.post('api/session', user);
}

export const logout = async () => {
    return await AJAX.delete('api/session');
}




