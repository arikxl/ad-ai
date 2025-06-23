'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserDetailsContext } from '@/context/UserContext'
import { api } from '@/convex/_generated/api'
import axios from 'axios'
import { useMutation } from 'convex/react'
import { LoaderPinwheel, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const CreateAdPage = () => {

    const [userInput, setUserInput] = useState('')
    const [loading, setLoading] = useState(false);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext)
    // console.log(userDetails)

    const CreateNewVideoData = useMutation(api.videoData.CreateNewVideoData);


    const generateAiVideoScript = async () => {
        setLoading(true)
        const result = await axios.post('/api/generate-script', {
            topic: userInput
        })
        // console.log(result.data)

        const rawResult = (result?.data).replace('```json', '').replace('```', '')
        const jsonResult = JSON.parse(rawResult);

        const resp = await CreateNewVideoData({
            uid: userDetails?._id,
            topic: userInput,
            scriptVariant: jsonResult
        })
        // console.log(resp)
        setLoading(false)
    }

    return (
        <div className='mt-20 flex flex-col'>
            <div className='text-center'>
                <Image src="/imgs/online.gif" alt='icon' width={200} height={200} className='mx-auto' />
            </div>
            <h2 className='font-bold text-3xl text-center'>
                🎥 Create AI Video Ads in Just One Click!
            </h2>
            <p className='text-gray-500 mt-3 text-lg text-center'>
                🚀 Turn your ideas into stunning, scroll-stopping videos - instantly, effortlessly and without editing skills!
            </p>


            <Input placeholder="Enter topic or product info"
                className={'w-lg mt-5 text-lg mx-auto'}
                onChange={(e) => { setUserInput(e.target.value) }}
            />

            {
                userDetails.name && (
                    <Button className={'w-md mt-5 text-center mx-auto gradient'}
                        onClick={generateAiVideoScript} disabled={loading}>
                        {
                            !loading
                                ? (<> <Sparkles /> Create!</>)
                                : (<LoaderPinwheel className='animate-spin' />)
                        }
                    </Button>
                )
            }
        </div>
    )
}

export default CreateAdPage