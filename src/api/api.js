import { computed, reactive, ref, toRefs} from "vue"

const users = reactive([])

function addUsers(user) {
    users.push(user)
}

function getUsers() {
    return users
}

function getFilterUsers(id) {
    return users.filter(item => item.id == id)[0]
}

const fetchGetUsers = () => fetch('https://jsonplaceholder.typicode.com/users/')
    .then((response) => response.json())
    .then((data) => {
        data.map(user => {
            addUsers({
                id: user.id,
                name: user.name,
                // bio: computed(()=> user.name)
            })
        })
    })
    
const fetchPostUsers = () => fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'POST',
        body: JSON.stringify({
            id: '1',
            name: 'Alen Walker'
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },  
    })
    .then((response) => response.json())
    .then((data) => users.push(data));    

const fetchPatchUsers = () => fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PATCH',
        body: JSON.stringify({
            name: 'Alen Не Walker'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },  
    })
    .then((response) => response.json())
    .then((data) => console.log(data)); 

export function userFetch() {
    return {
        getFilterUsers,
        getUsers,
        fetchGetUsers,
        fetchPostUsers,
        fetchPatchUsers,
        users   
    }
}