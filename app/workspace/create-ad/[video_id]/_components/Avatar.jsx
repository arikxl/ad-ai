import { FileQuestion } from 'lucide-react'
import React from 'react'

const Avatar = () => {
    return (
        <div className='p-5 rounded-xl shadow mt-6'>
            <h2 className='font-bold text-xl flex gap-2 items-center  mb-3'>
                <FileQuestion className='p-2 bg-cyan-600 text-white h-10 w-10 rounded-md' />
                Image/Video Upload
            </h2>
        </div>
    )
}

export default Avatar