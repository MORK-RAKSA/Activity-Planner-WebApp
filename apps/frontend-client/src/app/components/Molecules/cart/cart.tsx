import { QuestionSurveyType } from '@/app/types/all-type-survey.type'
import Image from 'next/image'
import React from 'react'

type Props = {
  data:QuestionSurveyType
}

export default function Cart({data}:Props) {
  return (
    <div className=' flex items-center bg-quartzColor px-4 py-4 gap-3 rounded-3xl'>
      <div className=' w-12 h-12'>
        <Image height={24} width={24} src={data.image} className=' w-full h-full object-cover' alt="" />
      </div>
      <p className=' font-medium'>{data.question}</p>
    </div>
  )
}