import { Dispatch } from "react"
// import {UseForm}

type TCardDetailContext = {
    state: TCardDetail
    dispatch: Dispatch<Partial<TCardDetail>>
}

type TCardDetail = {
    cardNumber: string,
    cardOwner: string,
    expMonth: string,
    expYear: string,
    cvv: string,

    inputIcon?: any,
    cardIcon?: any,
    cardColor: string
}

interface IMaskedInput {
	value: any,
	name: string,
	mask: any,
    min?: number,
	max?: number,
	normalizeZeros?: boolean,
	placeholder?: string,
	label?: string,
	dispatch?: () => {},
	onChange?: () => {},
	onAccept?: () => {},
}

interface IInput {
    name: string
    label?: string
    type?: string
    value?: any
    register?: any //UseFormRegister<FieldValues>
    rules: any
    validateError?: boolean
    validateErrorMessage?: string
    onChange?: () => {},
}