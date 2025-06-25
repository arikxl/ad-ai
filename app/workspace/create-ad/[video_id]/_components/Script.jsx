import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Script = ({ videoData }) => {
    // console.log(videoData)
    // console.log(videoData.scriptVariant[0].content)

    return (
        <div className='p-5 rounded-xl shadow'>
            {
                videoData &&
                (
                    <>
                        <h2 className='font-bold text-xl'>Video Ad Script</h2>
                        <hr className='py-3' />

                        <div className=''>
                            <label className='text-gray-500'>Video Project Topic</label>
                            <Input value={videoData?.topic} placeholder="Video Ad Topic" className={'text-center'} />
                        </div>

                        <div className='mt-4'>
                            <label className='text-gray-500'>Video Script</label>
                            <Textarea dir="rtl"
                                value={videoData?.script ?? videoData?.scriptVariant[0]?.content}
                                placeholder="Video Script" className={'text-right'} />
                        </div>

                        <div className='grid grid-cols-3 gap-3 mt-4'>
                            {
                                videoData?.scriptVariant?.map((script, idx) => (
                                    <h2 dir="rtl" key={idx}
                                        className='text-right p-3 border rounded-lg line-clamp-4'>
                                        {script?.content}
                                    </h2>
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