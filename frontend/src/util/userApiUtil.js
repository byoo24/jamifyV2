import axios from 'axios';


export const retrieveUser = userId => {
    const user = `{
                    users {
                            username
                            email
                        }
}`
    return axios.get('/graphql', )
}