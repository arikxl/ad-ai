'use client'

import { api } from '@/convex/_generated/api';
import { useConvex, useQuery } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Script from './_components/Script';

const VideoSettingsPage = () => {

    const convex = useConvex()
    const { video_id } = useParams();
    // console.log(video_id)
    const [videoData, setVideoData] = useState({})

    // const videoData = useQuery(api.videoData.GetVideoDataById, {
    //     vid:video_id
    // })

    const GetVideoData = async () => {
        const result = await convex.query(api.videoData.GetVideoDataById, {
            vid: video_id
        })
        setVideoData(result);
    }

    useEffect(() => {
        GetVideoData();
        // console.log(videoData)
    }, [])


    // console.log(videoData)
    return (
        <div>

            <h2 className='font-bold text-2xl'>Create Video Ad</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
                <div className='md:col-span-2'>
                    <Script videoData={videoData} />
                </div>
                <div>
                    Preview
                </div>
            </div>

        </div>
    )
}

export default VideoSettingsPage