'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {  Sparkles } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const CreateAdPage = () => {

const [userInput, setUserInput] = useState('')

  return (
      <div className='mt-20 flex flex-col'>
          <div className='text-center'>
              <Image src="/imgs/online.gif" alt='icon' width={200} height={200} className='mx-auto'/>
          </div>
          <h2 className='font-bold text-3xl text-center'>
              🎥 Create AI Video Ads in Just One Click!
          </h2>
          <p className='text-gray-500 mt-3 text-lg text-center'>
              🚀 Turn your ideas into stunning, scroll-stopping videos - instantly, effortlessly and without editing skills! 
          </p>


          <Input placeholder="Enter topic or product info"
              className={'w-lg mt-5 text-lg mx-auto'}
              onChange={ (e)=>{setUserInput(e.target.value)}}
          />
          
          <Button className={'w-md mt-5 text-center mx-auto gradient'}>
              <Sparkles /> Create!
              
          </Button>
      </div>
  )
}

export default CreateAdPage