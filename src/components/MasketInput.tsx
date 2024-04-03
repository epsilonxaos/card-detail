
import React, { useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { IMaskedInput } from '../types/cardDetail'

const MaskedInput = (props: IMaskedInput) => {
	const ref = useRef(null)
	const inputRef = useRef(null)

	const {
		value,
		name,
		mask,
		min,
		max,
		normalizeZeros,
		placeholder,
		label,
		dispatch,
		onChange,
		onAccept,
	} = props

	return (
		<div>
			{label && (
				<label
					className='block mb-2 text-sm font-medium'
					htmlFor={name}>
					{label}
				</label>
			)}
			<IMaskInput
				id={name}
				name={name}
				ref={ref}
				inputRef={inputRef}
				value={value}
				mask={mask}
				normalizeZeros={normalizeZeros}
				radix='.'
				unmask={false}
				lazy={false}
				{...(dispatch && { dispatch })}
				{...(min && { min })}
				{...(max && { max })}
				{...(placeholder && { placeholder })}
				{...(onAccept && { onAccept })}
				{...(onChange && { onChange })}
				className='bg-transparent border-2 border-verdigris text-white placeholder:text-slate-500 text-sm block w-full p-2.5'
			/>
		</div>
	)
}

export default MaskedInput
