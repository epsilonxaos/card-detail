
import React, { useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { IInput, IMaskedInput } from '../types/cardDetail'

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
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
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
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			/>
		</div>
	)
}

const Input = (props: IInput) => {
	const {
		name,
		label,
		value,
		type = "text",
		register,
		rules,
		validateError,
		validateErrorMessage,
		onChange
	} = props

	return <>
		{label && (
			<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor={name}>{label}</label>
		)}

		<input
			className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			type={type}
			{...(!register && {name})}
			{...(!register && {id: name})}
			{...(!register && value && { value})}
			{...(register && register(name, rules))}
			
			{...(onChange && {onChange})}
		/>
		{validateError && <span className=' text-xs text-red-400'>{validateErrorMessage}</span>}

	</>
}

Input.Masked = MaskedInput 

export default Input
