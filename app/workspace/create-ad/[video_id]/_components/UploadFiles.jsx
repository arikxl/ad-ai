'use client'

import { FilePlus2, ImageUp, X } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

const UploadFiles = ({ videoData, onHandleInputChange }) => {

    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles])
    }

    const removeImg = (idxToRemove) => {
        const updatedFiles = files.filter((_, index) => index != idxToRemove);
        setFiles(updatedFiles);
    }

    return (
        <div className='p-5 rounded-xl shadow mt-6'>
            <h2 className='font-bold text-xl flex gap-2 items-center  mb-3'>
                <ImageUp className='p-2 bg-cyan-600 text-white h-10 w-10 rounded-md' />
                Image/Video Upload
            </h2>

            <div className='mt-3'>
                <label className='text-gray-500'>
                    Upload Images or Videos for your Ads
                </label>

                <label htmlFor='fileUpload'>
                    <div className='p-5 bg-secondary border-dashed rounded-xl flex flex-col items-center cursor-pointer'>
                        <FilePlus2 className='w-10 h-10 text-gray-400' />
                        <h2>Click here to upload files</h2>
                    </div>
                </label>
                <input type='file' id='fileUpload' className='invisible' accept='image/*,video/*'
                    multiple onChange={handleFileChange} />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4'>
                {
                    files.map((file, idx) => {
                        const previewUrl = URL.createObjectURL(file);
                        return (
                            <div key={idx} className=''>
                                <X className='cursor-pointer absolute text-red-800 text-sm' onClick={()=>removeImg(idx) } />
                                <Image src={previewUrl} alt="image" width={150} height={150}
                                    className='rounded-lg w-[100px] aspect-square object-cover border' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default UploadFiles