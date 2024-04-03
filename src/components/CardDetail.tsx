import React, { useReducer, useState } from 'react'
import CardDetailContext from '../context/CardDetailContext'
import CardFront from './Card/Front'
import CardBack from './Card/Back'

import '../css/card.css'

import {defaultParamsCardDetails} from '../assets/defaultParams'
import { TCardDetail } from '../types/cardDetail'
import Form from './Form'

const reducer = (state: TCardDetail, action: Partial<TCardDetail>) => {
    return {...state, ...action}
}

const initialArgs = defaultParamsCardDetails as TCardDetail

export default function CardDetail() {
    const [state, dispatch] = useReducer(reducer, initialArgs)
	const [flipped, setFlipped] = useState(false)

	return (
		<CardDetailContext.Provider value={{state, dispatch}}>
			<div className='flex flex-col gap-2 w-full max-w-[500px] mx-auto py-8'>
				<div className='w-full mx-auto'>
					<div className="relative pb-20">
						<div className='absolute w-[80%] bottom-0 left-0 fill-indigo-800'>
							<div className='absolute top-7 right-10'>
								{state?.cardIcon}
							</div>
							<CardFront />
						</div>
						<div className='back w-[80%] ml-auto mr-0 fill-blue-400'>
							<CardBack />
						</div>
					</div>
				</div>
				<div className='w-full text-left'>
					<Form />
				</div>
			</div>
		</CardDetailContext.Provider>
	)
}