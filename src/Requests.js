import axios from 'axios';


const axiosGraphQL = axios.create({
    baseURL: 'http://130.83.247.244:3000',
    headers: {
    },
});


const createAdmin = (name, pass) => `
{
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

const login = (name, pass) => `
{
    auth(username:"`+ name + `", password:"` + pass + `")
    {
            accessToken
            refreshToken
    }
}
`
const changePassword = (pass, token) => `
{
    changePassword(token:"`+ token + `", password:"` + pass + `")
}
`
const refresh = (token) => `
{
    refresh(refresh_token:"`+ token`")
}
`
const createCode = (token) => `
{
    refresh(token:"`+ token`")
    {
        code
    }
}
`
const demoteUser = (user, token) => `
{
    demoteUser(token:"`+ token + `", username:"` + user + `")
}
`
const deleteUser = (user, token) => `
{
    deleteUser(token:"`+ token + `", username:"` + user + `")
}
`
const createMuseumObject = (
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
{
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
const updateMuseumObject = (
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
{
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



const acceptReview = (tour, token) => `
{
    acceptReview(token:"`+ token + `", tour:"` + tour + `")
}
`
const denyReview = (tour, token) => `
{
    denyReview(token:"`+ token + `", tour:"` + tour + `")
}
`