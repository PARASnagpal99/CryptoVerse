import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'eb50017e0bmshe7a189c40508b6cp140f47jsn827d82921457',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url , headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi' ,
    baseQuery : fetchBaseQuery({baseUrl}) ,
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : () => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery 
} = cryptoApi ;