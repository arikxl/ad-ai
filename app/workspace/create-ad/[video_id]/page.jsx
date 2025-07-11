'use client'

import { api } from '@/convex/_generated/api';
import { useConvex, useQuery } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Script from './_components/Script';
import UploadFiles from './_components/UploadFiles';
import AvatarList from './_components/AvatarList';
import VoiceList from './_components/VoiceList';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const VideoSettingsPage = () => {

    const convex = useConvex()
    const { video_id } = useParams();
    // console.log(video_id)
    const [videoData, setVideoData] = useState({})

    // const videoData = useQuery(api.videoData.GetVideoDataById, {
    //     vid:video_id
    // })

    useEffect(() => {
        GetVideoData();
        // console.log(videoData)
    }, [])

    const GetVideoData = async () => {
        const result = await convex.query(api.videoData.GetVideoDataById, {
            vid: video_id
        })
        setVideoData(result);
    }





    const onHandleInputChange = async (filed, value) => {
        console.log(value)
        setVideoData(prev => ({
            ...prev,
            [filed]:value
        }))
    } 

    // console.log(videoData)
    return (
        <div>

            <h2 className='font-bold text-2xl'>Create Video Ad</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
                <div className='md:col-span-2'>
                    <Script videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <UploadFiles videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <AvatarList videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <VoiceList videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <Button className={'w-full mt-5 text-center mx-auto gradient'}>
                        {/* {onClick={} >
                         {
                             !loading
                                 ? (<> <Sparkles /> Create!</>)
                                 : (<LoaderPinwheel className='animate-spin' />)
                         } */}

                        <Sparkles /> Create!
                    </Button>
                </div>
                <div>
                    Preview
                </div>
            </div>

        </div>
    )
}

export default VideoSettingsPage