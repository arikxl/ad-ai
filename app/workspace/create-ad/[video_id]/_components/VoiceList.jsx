'use client'


import axios from 'axios'
import { Mic } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const VoiceList = ({ onHandleInputChange, videoData }) => {

    const [voiceList, setVoiceList] = useState([])


    const getVoiceList = async () => {
        const result = await axios.get('/api/get-voice-list')
        const array = result?.data
        // console.log(array)
        console.log(array[3])
        const hebrewVoices = array.filter(voice =>
            voice.languages.some(lang => lang.locale === 'he-IL')
        );
        setVoiceList(hebrewVoices)
    }

    useEffect(() => {
        getVoiceList();
    }, [])

    return (
        <div className='p-5 rounded-xl shadow mt-6'>
            <h2 className='font-bold text-xl flex gap-2 items-center  mb-3'>
                <Mic className='p-2 bg-cyan-700 text-white h-10 w-10 rounded-md' />

                Select Voice
            </h2>

            <div className='mt-3'>
                <label className='text-gray-500 mb-2'>
                    Select the perfect voice for your avatar
                </label>

                <div className=''>
                    {
                        voiceList.length > 0 && voiceList.map((v, idx) => (
                            <div key={idx}>
                                
                            </div>
                        ))
                        }
                </div>
            </div>

        </div>
    )
}

export default VoiceList