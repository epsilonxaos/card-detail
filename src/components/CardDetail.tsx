import React, { Dispatch, useContext, useEffect, useReducer, useState } from 'react'
import { icons, iconsSingle } from '../assets/icons'
// import MaskedInput from './MaskedInput'
import { RiCloseCircleLine } from 'react-icons/ri'
import '../css/card.css'
import MaskedInput from './MasketInput'
import CardDetailContext from '../context/CardDetailContext'
import CardFront from './Card/Front'
import CardBack from './Card/Back'

import {defaultParamsCardDetails} from '../assets/defaultParams'
import { TCardDetail } from '../types/cardDetail'

const reducer = (state: TCardDetail, action: Dispatch<Partial<TCardDetail>>) => {
    return {...state, ...action}
}

const initialArgs = defaultParamsCardDetails as TCardDetail

export default function CardDetail() {
    const [state, dispatch] = useReducer(reducer, initialArgs)
	const [flipped, setFlipped] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	//* Define the color swap function
	const swapColor = function (basecolor) {
		document.querySelectorAll('.lightcolor').forEach(function (input) {
			input.setAttribute('class', '')
			input.setAttribute('class', 'lightcolor ' + basecolor)
		})
		document.querySelectorAll('.darkcolor').forEach(function (input) {
			input.setAttribute('class', '')
			input.setAttribute('class', 'darkcolor ' + basecolor + 'dark')
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		console.log("Enviado")
	}

	return (
		<CardDetailContext.Provider value={{state, dispatch}}>
			<div className='w-full text-center pb-6 pt-5'>
				<p className='text-white uppercase mb-5 border-t border-verdigris pt-3'>Información de pago</p>

				{/* {errorMessage && (
					<div className='bg-delftblue bg-opacity-80 backdrop-blur-sm md:ml-8 text-pink-500 font-medium p-3 rounded'>
						<RiCloseCircleLine
							size={16}
							className='inline-block mr-1'
						/>{' '}
						{errorMessage}
					</div>
				)} */}
			</div>
			<div className='flex flex-col md:flex-row gap-2'>
				<div className='container mx-auto'>
					<div className={`creditcard ${flipped ? 'flipped' : ''}`}>
						<div className='front'>
							<div id='ccsingle'></div>
							<CardFront />
						</div>
						<div className='back'>
							<CardBack />
						</div>
					</div>
				</div>
				<div className='text-left'>
					
				</div>
			</div>
		</CardDetailContext.Provider>
	)
}