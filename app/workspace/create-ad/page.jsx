'use client'

import axios from 'axios'
import Image from 'next/image'
import { useMutation } from 'convex/react'
import { useContext, useState } from 'react'
import { Languages, LanguagesIcon, LoaderPinwheel, LucideLanguages, Sparkles } from 'lucide-react'

import { api } from '@/convex/_generated/api'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { UserDetailsContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const CreateAdPage = () => {

    const router = useRouter();
    const [userInput, setUserInput] = useState('')
    const [language, setLanguage] = useState('hebrew')
    const [loading, setLoading] = useState(false);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext)
    // console.log(userDetails)

    const CreateNewVideoData = useMutation(api.videoData.CreateNewVideoData);


    const generateAiVideoScript = async () => {
        setLoading(true)
        const result = await axios.post('/api/generate-script', {
            topic: userInput,
            language: language
        })
        // console.log(result.data)

        const rawResult = (result?.data).replace('```json', '').replace('```', '')
        const jsonResult = JSON.parse(rawResult);

        const resp = await CreateNewVideoData({
            uid: userDetails?._id,
            topic: userInput,
            language: language,
            scriptVariant: jsonResult
        })
        // console.log(resp)
        setLoading(false)
        router.push('/workspace/create-ad/' + resp)
    }

    return (
        <div className='mt-20 flex flex-col'>
            <div className='text-center'>
                <Image unoptimized src="/imgs/online.gif" alt='icon' width={200} height={200} className='mx-auto' />
            </div>
            <h2 className='font-bold text-3xl text-center'>
                🎥 Create AI Video Ads in Just One Click!
            </h2>
            <p className='text-gray-500 mt-3 text-lg text-center'>
                🚀 Turn your ideas into stunning, scroll-stopping videos - instantly, effortlessly and without editing skills!
            </p>


            <div className='flex gap-8 justify-center'>
                <LanguagesIcon />
                <button disabled={loading} onClick={() => setLanguage('hebrew')}>HE</button>
                <button disabled={loading} onClick={() => setLanguage('english')}>EN</button>
                <button disabled={loading} onClick={() => setLanguage('russian')}>RU</button>
            </div>


            <Input placeholder="Enter topic or product info"
                className={'w-lg mt-5 text-lg mx-auto text-center'}
                onChange={(e) => { setUserInput(e.target.value) }}
            />

            {
                userDetails.name && (
                    <Button className={'w-md mt-5 text-center mx-auto gradient'}
                        onClick={generateAiVideoScript} disabled={loading || userInput.length===0}>
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