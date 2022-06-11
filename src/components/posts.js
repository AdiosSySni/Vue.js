import {userFetch} from '../api/api'
const fetch = userFetch();
const users = fetch.getUsers()


