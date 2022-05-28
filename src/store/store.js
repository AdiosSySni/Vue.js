import { computed, reactive, toRefs, watch } from 'vue'


const user = reactive({
    person: {
        id: null,
        background: null,
        avatar: null,
        name: null,
        about: null,
    },

    authentication: {
        logIn: null,
        logOut: null,
    },

    favouriteLinks: [
        {

        }
    ],

    articles: {
        photo: null,
    },

    posts: {
        myPosts: [
            {
                name: null,
                content: {
                    photos: null,
                    description: null,
                },
                button: null
            }
        ],
        othersPosts: [
            {   
                person: {
                    id: null,
                    avatar: null,
                    name: null,
                    about: null,
                },
                content: {
                    description: null,
                    photos: null,
                },
                comments: [
                    {
                        person: {
                            id: null,
                            avatar: null,
                            name: null,
                            about: null,
                        },
                        message: null,
                        likes: null
                    }
                ],
                likes: null,
            }
        ]
    },

    chats: [
        {
            name: null,
            avatar: null,
            message: null
        }
    ],
    
    status: {
        online: null,
        offline: null,
        not_a_place: null,
        dont_distrub: null,
    },

    stats: {
        views: null,
        views_post: null,
        visitors: [
            {   
                id: null,
                avatar: null,
                name: null,
                about: null,
            }
        ],
        groups: [
            {
                avatar: null,
                name: null
            }
        ],
        jobs: {
            currently: [],
            tracked: [],
            searches: [],
            new: [],
        },
    },
})


export function userStore(){
    return{
        ...toRefs(user)
    }
}