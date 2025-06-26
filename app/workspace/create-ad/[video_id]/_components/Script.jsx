import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Video } from 'lucide-react'
import React from 'react'

const Script = ({ videoData, onHandleInputChange }) => {
    // console.log(videoData)
    // console.log(videoData.scriptVariant[0].content)




    return (
        <div className='p-5 rounded-xl shadow'>
            {
                videoData &&
                (
                    <>
                        <h2 className='font-bold text-xl flex gap-2 items-center mb-3'>
                            <Video className='p-2 bg-cyan-400 text-white h-10 w-10 rounded-md' />
                            Video Ad Script
                        </h2>
                        <div className=''>
                            <label className='text-gray-500'>Video Project Topic</label>
                            <Input value={videoData?.topic} placeholder="Video Ad Topic" className={'text-center'}
                                onChange={(e) => onHandleInputChange('topic', e.target.value)}

                            />
                        </div>

                        <div className='mt-4'>
                            <label className='text-gray-500'>Video Script</label>
                            {
                                videoData.scriptVariant &&
                                (
                                    <Textarea dir="rtl"
                                        value={videoData?.script ?? videoData?.scriptVariant[0]?.content}
                                        placeholder="Video Script" className={'text-right'}
                                        onChange={(e) => onHandleInputChange('script', e.target.value)}
                                    />
                                )
                            }

                        </div>

                        <div className='grid grid-cols-3 gap-3 mt-4'>
                            {
                                videoData?.scriptVariant?.map((script, idx) => (
                                    <div dir="rtl" key={idx}
                                        className={`text-right p-3 border rounded-lg cursor-pointer hover:shadow-lg
                                             ${script?.content === videoData?.script && 'border-primary bg-blue-50 text-primary'}`}
                                        onClick={() => onHandleInputChange('script', script?.content)}
                                    >
                                        <h2 className='line-clamp-3'>{script?.content}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Script