import axios from 'axios';
import { NextResponse } from 'next/server';



export async function GET(req) {
    const result = await axios.get('https://api.d-id.com/tts/voices', {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.DID_VOICE_API_KEY}`
        }
    })

    console.log(result.data)
    return NextResponse.json(result.data);
}
