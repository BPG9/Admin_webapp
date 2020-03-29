/**
 * Liste von alle API calls mit Parameter. Die Namen sind genauso wie api FUnktionen geschrieben.
 */

import axios from 'axios';
import * as conf from './config'


/**
 * allgemeine Konfiguration für Call APIs
 */
export const axiosGraphQL = axios.create({
    baseURL: conf.BACKEND,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});


export const createAdmin = (name, pass) => {
    return `
mutation {
    createUser(username:"`+ name + `", password:"` + pass + `")
    {
        user
        {
            username
            password
        }
    }
    }
`

}

export const login = (name, pass) => {
    return JSON.stringify({
        "query": `mutation {auth(username:"` + name + `", password:"` + pass + `") {accessToken  refreshToken}}`
    })
}


export const changePassword = (pass, token) => {
    return `
    mutation {
    changePassword(token:"`+ token + `", password:"` + pass + `")
    {
        ok{
          ... on BooleanField
          {
            boolean
          }
        }
      }
}
`
}


export const refresh = (token) => {
    return JSON.stringify({
        "query": `
        mutation {
            refresh(refreshToken:"`+ token + `")
            {newToken}
        }
        
`
    })
}
export const createCode = (token) => {
    return `
mutation {
    createCode(token:"`+ token + `")
    {
        code
       { 
        ... on StringField
        {
          string
        }
       }
    }
    }
`
}
export const demoteUser = (user, token) => {
    return `
mutation {
    demoteUser(token:"`+ token + `", username:"` + user + `")
    {
        ok
            {   
            ... on BooleanField
                {
                    boolean
                }
            }
    }
}
`
}
export const deleteUser = (user, token) => {
    return `
mutation {
    deleteUser(token:"`+ token + `", username:"` + user + `")
    {
        ok
            {   
            ... on BooleanField
                {
                    boolean
                }
            }
    }
}
`

}
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
    interdisciplinaryContext) => {
    return `
mutation {
    createMuseumObject( 
        objectId:"`+ objectId + `" ,
        category:"`+ category + `" ,
        subCategory:"`+ subCategory + `",
        title:"`+ title + `",
        token:"`+ token + `",
        year:"`+ year + `",
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
}
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
    interdisciplinaryContext) => {
    console.log(token,
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
        interdisciplinaryContext)
    return `
mutation {
    updateMuseumObject( 
        objectId:"`+ objectId + `" ,
        token:"`+ token + `",` +
        `category:"` + category + `" ,` +
        `subCategory:"` + subCategory + `" ,` +
        `title:"` + title + `",` +
        ` year:"` + year + `",` +
        `artType:"` + artType + `",` +
        `creator:"` + creator + `",` +
        `material:"` + material + `",` +
        `size:"` + size + `",` +
        `location:"` + location + `",` +
        `description:"` + description + `",` +
        `interdisciplinaryContext:"` + interdisciplinaryContext + `")
        {
            museumObject
            {
                objectId
                title
            }
        }
        }
`
}



export const acceptReview = (tour, token) => {
    return JSON.stringify({
        "query": `
mutation {
    acceptReview(token:"`+ token + `", tourId:"` + tour + `")
 {
ok
{
... on BooleanField
{
boolean
}}
tour
{
id
status
}}}
`
    })
}
export const denyReview = (tour, token) => {
    return JSON.stringify({
        "query": `
mutation {
    denyReview(token:"`+ token + `", tourId:"` + tour + `")
    {
        ok
        {
        ... on BooleanField
        {
        boolean
        }}
        tour
        {
        id
        status
        }}}
`
    })
}


export const pending = (token) => {
    return `
    query{
        pending(token:"`+ token + `")
       {
           id
           name
           status
           description
       }
    }
`
}


export const exp = (token) => {
    return `
    query{
        allObjects(token:"`+ token + `")
        {
            objectId     category     subCategory     title     year          artType     creator     material     size_     location     description     interdisciplinaryContext
        }
    }
`
}



