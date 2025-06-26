import axios from 'axios';
import { NextResponse } from 'next/server';


// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         authorization: `Basic ${process.env.DID_API_KEY}`
//     }
// };


// fetch('https://api.d-id.com/clips/presenters?limit=100', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


export async function GET(req) {
    const result = await axios.get('https://api.d-id.com/clips/presenters?limit=200', {
        headers: {
            accept: 'application/json',
            authorization: `Basic ${process.env.DID_API_KEY}`
        }
    })

    return NextResponse.json(result.data);
}

