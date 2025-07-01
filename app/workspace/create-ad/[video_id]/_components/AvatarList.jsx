'use client'

import axios from 'axios'
import { User } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const AvatarList = ({ videoData, onHandleInputChange }) => {

    const [avatarList, setAvatarList] = useState([])


    const getAvatarList = async () => {
        const result = await axios.get('/api/get-avatar-list')
        const array = result?.data?.presenters
        setAvatarList(array)
        // console.log(array[3])
    }

    // const getAvatarList = async () => {
    //     try {
    //         const result = await axios.get('/api/get-avatar-list');
    //         const array = result?.data?.presenters || [];

    //         // console.log("All voice IDs:", array.map(a => a.voice?.voice_id));

    //         const filter = array.filter((item) =>
    //             item?.voice?.voice_id?.includes('en')
    //         );

    //         console.log("Filtered Hebrew avatars:", filter);
    //         setAvatarList(filter); // הערך יגיע לרנדר הבא
    //     } catch (error) {
    //         console.error("Error fetching avatar list:", error);
    //     }
    //   };


    useEffect(() => {
        getAvatarList();
    }, [])


    return (
        <div className='p-5 rounded-xl shadow mt-6'>
            <h2 className='font-bold text-xl flex gap-2 items-center  mb-3'>
                <User className='p-2 bg-cyan-600 text-white h-10 w-10 rounded-md' />
                Select Avatar
            </h2>


            <div className='mt-3'>
                <label className='text-gray-500 mb-2'>
                    Select your Fav Avatar for Video ad
                </label>

                <div className='flex flex-wrap gap-2 justify-between mt-4 h-[200px] overflow-auto'>
                    {
                        avatarList?.length > 0 && avatarList.map((a, idx) => (
                            <div key={idx}
                                className={`${videoData?.avatar?.presenter_id === a.presenter_id
                                    ? ' border-primary bg-blue-100 text-primary'
                                    : ' border-white'} rounded-lg border cursor-pointer  p-1`}
                                onClick={() => onHandleInputChange('avatar', a)}>
                                <Image src={a?.thumbnail_url} width={100} height={100} alt={a?.name}
                                    className='rounded-lg bg-ring' />
                                <h2 className='text-center'>{a.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AvatarList