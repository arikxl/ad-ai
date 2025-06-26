'use client'

import axios from 'axios'
import { User } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const AvatarList = () => {

    const [avatarList, setAvatarList] = useState([])


    const getAvatarList = async () => {
        const result = await axios.get('/api/get-avatar-list')
        const array = result?.data?.presenters
        setAvatarList(array)
        console.log(array[9])
        // console.log(array[0])
        // console.log(array[0]?.voice?.voice_id)
        // const filter = array.filter((item) => item?.voice?.voice_id.includes('en'))
        // console.log(filter)
        // setAvatarList(filter)
        // console.log(avatarList)
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
                {/* <User className='p-2 bg-cyan-600 text-white h-10 w-10 rounded-md' /> */}
                Select Avatar
            </h2>


            <div className='mt-3'>
                <label className='text-gray-500 mb-2'>
                    Select your Fav Avatar for Video ad
                </label>

                <div className='flex flex-wrap gap-4 justify-between mt-4'>
                    {
                        avatarList?.map((a, idx) => (
                            <div key={idx} className='text-center'>
                                <Image src={a?.thumbnail_url} width={100} height={100} alt={a?.name}
                                    className='rounded-lg' />
                                <h2 >{a.name }</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AvatarList