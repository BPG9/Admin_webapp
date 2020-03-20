import axios from 'axios';
import * as conf from './config'

export const axiosGraphQL = axios.create({
    baseURL: conf.BACKEND,
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
        'Accept': 'application/graphql',
        'Content-Type': 'application/graphql',
        'Access-Control-Allow-Origin': "/",
        "Referer": "a"
    },
});


export const createAdmin = (name, pass) => `
mutation createAdmin{
    createAdmin(username:"`+ name + `", password:"` + pass + `")
    {
        user
        {
            username
            password
        }
    }
}
`

export const login = (name, pass) => `
mutation {
    auth(username:"admin", password:"admin")
    {
            accessToken
            refreshToken
    }
}
`
export const changePassword = (pass, token) => `
refresh changePassword {
    changePassword(token:"`+ token + `", password:"` + pass + `")
}
`
export const refresh = (token) => `
mutation refresh{
    refresh(refresh_token:"`+ token`")
}
`
export const createCode = (token) => `
mutation createCode{
    refresh(token:"`+ token`")
    {
        code
    }
}
`
export const demoteUser = (user, token) => `
mutation demoteUser{
    demoteUser(token:"`+ token + `", username:"` + user + `")
}
`
export const deleteUser = (user, token) => `
mutation deleteUser{
    deleteUser(token:"`+ token + `", username:"` + user + `")
}
`
export const createMuseumObject = (
    token,
    objectId,
    category,
    subCategory,
    title,
    year,
    picture,
    artType,
    creator,
    material,
    size,
    location,
    description,
    interdisciplinaryContext) => `
mutation createMuseumObject{
    createMuseumObject( 
        objectId:"`+ objectId + `" ,
        category:"`+ category + `" ,
        subCategory:"`+ subCategory + `",
        title:"`+ title + `",
        token:"`+ token + `",
        year:`+ year + `,
        picture:"`+ picture + `",
        artType:"`+ artType + `",
        creator:"`+ creator + `",
        material:"`+ material + `",
        size:"`+ size + `",
        location:"`+ location + `",
        description:"`+ description + `",
        interdisciplinaryContext:"`+ interdisciplinaryContext + `")
        {
            museumObject
            {
                objectId
                title
            }
        }
}
`
export const updateMuseumObject = (
    token,
    objectId,
    category,
    subCategory,
    title,
    year,
    picture,
    artType,
    creator,
    material,
    size,
    location,
    description,
    interdisciplinaryContext) =>
    `
mutation updateMuseumObject{
    updateMuseumObject( 
        objectId:"`+ objectId + `" ,
        token:"`+ token + `",` +
    category && `category:"` + category + `" ,` +
    subCategory && `subCategory:"` + subCategory + `" ,` +
    title && `title:"` + title + `",` +
    year && ` year:` + year + `,` +
    picture && `picture:"` + picture + `",` +
    artType && `artType:"` + artType + `",` +
    creator && `creator:"` + creator + `",` +
    material && `material:"` + material + `",` +
    size && `size:"` + size + `",` +
    location && `location:"` + location + `",` +
    description && `description:"` + description + `",` +
    interdisciplinaryContext && `interdisciplinaryContext:"` + interdisciplinaryContext + `")
        {
            museumObject
            {
                objectId
                title
            }
        }
}
`



export const acceptReview = (tour, token) => `
mutation accept{
    acceptReview(token:"`+ token + `", tour:"` + tour + `")
}
`
export const denyReview = (tour, token) => `
mutation denyReview{
    denyReview(token:"`+ token + `", tour:"` + tour + `")
}
`