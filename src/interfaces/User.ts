interface User {
    id: string,
    email: string
}

interface Profile extends User {
    avatar: string,
    firstname: string,
    lastname: string
}

export { User, Profile };
