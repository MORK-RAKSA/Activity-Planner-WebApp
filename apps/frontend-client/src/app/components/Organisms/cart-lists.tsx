import { QuestionSurveyType } from '@/app/types/all-type-survey.type'
import React from 'react'
import Cart from '../Molecules/cart/cart'

interface CartListsProps {
    data: QuestionSurveyType[];
  }

export default function CartLists({data}: CartListsProps) {
    
  return ( 
    <div className=' flex flex-col gap-5'>
      {
        data.map((item, index) => {
          return <Cart key={index} data={item} />
        })
      }
    </div>
  )
}