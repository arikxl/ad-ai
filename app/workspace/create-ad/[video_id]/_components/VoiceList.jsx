'use client'


import axios from 'axios'
import { Mars, Mic, PlayCircle, Venus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const VoiceList = ({ onHandleInputChange, videoData }) => {

    const [voiceList, setVoiceList] = useState([]);

    const localeMap = {
        hebrew: 'he-IL',
        english: 'en-US',
        russian: 'ru-RU',
    };

    const getVoiceList = async () => {
        try {
            const result = await axios.get('/api/get-voice-list');
            const array = result?.data || [];

            const currentLang = localeMap[videoData?.language] || 'he-IL';
            // console.log('currentLang:', currentLang);

            const filterVoices = array.filter((voice) =>
                voice.languages.some((lang) => lang.locale === currentLang)
            );

            setVoiceList(filterVoices);
        } catch (err) {
            console.error('Error loading voices:', err);
        }
    };

    useEffect(() => {
        if (videoData?.language) {
            getVoiceList();
        }
    }, [videoData?.language])

    // const playDemo = (voice) => {
    //     const previewUrl = voice.languages.find(lang => lang.locale === 'en-US')?.previewUrl;
    //     const audio = new Audio(previewUrl);
    //     audio.play();
    // }


    // console.log(videoData.language)

    return (
        <div className='p-5 rounded-xl shadow mt-6'>
            <h2 className='font-bold text-xl flex gap-2 items-center  mb-3'>
                <Mic className='p-2 bg-cyan-800 text-white h-10 w-10 rounded-md' />

                Select Voice
            </h2>

            <div className='mt-3'>
                <label className='text-gray-500 mb-2'>
                    Select the perfect voice for your avatar
                </label>

                <div className='py-2 pt-4 grid grid-cols-2 gap-2 h-[200px] overflow-auto'>
                    {
                        voiceList.length > 0 && voiceList.map((v, idx) => (
                            <div key={idx}
                                className={`${videoData?.voice?.id === v.id
                                    ? ' border-primary bg-blue-100 text-primary'
                                    : ' border-white'} border rounded-md flex items-center gap-2 mb-2 cursor-pointer p-2 hover:bg-blue-50`}
                                onClick={() => onHandleInputChange('voice', v)}>

                                <PlayCircle className={`${v?.gender === 'male' ? 'text-blue-400' : 'text-[hotpink]'}`} />
                                <div className=''>
                                    <h2>
                                        {v?.name}
                                        {(v.age || v.description) && (
                                            <> (
                                                {v.age && `${v.age}`}{v.age && v.description&&', ' }{v.description &&`${v.description}`}
                                            )</>
                                        )}
                                    </h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default VoiceList