import { useContext } from "react"
import Input from "./Input"
import CardDetailContext from "../context/CardDetailContext"

import defaultMaskCard from '../assets/defaultMaskCard.json'

import {FaCcAmex, FaCcMastercard, FaCcVisa} from 'react-icons/fa'

export default function Form() {

    const {state, dispatch} = useContext(CardDetailContext)

    const handleSubmit = e => {
		e.preventDefault()

		console.log("Enviado")
	}

    return <form
    onSubmit={handleSubmit}
    className='md:pl-8 pt-6 pb-8 mb-4'>
    <div className='mb-4 relative'>
        <Input.Masked
            onAccept={(value, mask) => {
                dispatch({cardNumber: value})

                switch (mask.masked.currentMask.cardtype) {
                    case 'american express':
                        dispatch({
                            inputIcon: FaCcAmex({size: "1.5em", color: "#079043"}),
                            cardIcon: FaCcAmex({size: "3em", color: "#079043"}),
                            cardColor: "green"
                        })
                        break
                    case 'visa':
                        dispatch({
                            inputIcon: FaCcVisa({size: "1.5em", color: "#074790"}),
                            cardIcon: FaCcVisa({size: "3em", color: "#074790"}),
                            cardColor: "blue"
                        })
                        break
                    // case 'diners':
                    //     ccicon.innerHTML = icons.diners
                    //     ccsingle.innerHTML = iconsSingle.diners_single
                    //     swapColor('orange')
                    //     break
                    case 'mastercard':
                        dispatch({
                            inputIcon: FaCcMastercard({size: "1.5em", color: "#F6A800"}),
                            cardIcon: FaCcMastercard({size: "3em", color: "#F6A800"}),
                            cardColor: "orange"
                        })

                        break
                    default:
                        dispatch({
                            inputIcon: null,
                            cardIcon: null,
                            cardColor: "grey"
                        })
                        break
                }
            }}
            value={state.cardNumber}
            label={'NÚMERO DE TARJETA'}
            name={'cardNumber'}
            mask={defaultMaskCard}
            dispatch={(appended, dynamicMasked) => {
                var number = (dynamicMasked.value + appended).replace(/\D/g, '')

                for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
                    let re = new RegExp(dynamicMasked.compiledMasks[i].regex)
                    if (number.match(re) != null) {
                        return dynamicMasked.compiledMasks[i]
                    }
                }
            }}
            placeholder={'0000 0000 0000 0000'}
        />

        <div className="absolute top-auto z-[1] bottom-1 right-2 w-10">
            {state?.icon}
        </div>
    </div>
    <div className='mb-4'>
        <Input
            label="TITULAR"
            onChange={ev => dispatch({ cardOwner: ev.target.value}) }
            value={state.cardOwner}
        />
    </div>
    <div>
        <p className=' mb-2'>EXPIRACIÓN</p>
    </div>
    <div className='mb-4 flex'>
        <div className='mr-2'>
            <Input.Masked
                onAccept={value => {
                    dispatch({expMonth: value})
                }}
                value={state.expMonth}
                name={'expirationMonth'}
                mask={[
                    {
                        mask: '00',
                    },
                ]}
                placeholder={'MES'}
                min={1}
                max={12}
            />
        </div>
        <div className='mr-2'>
            <Input.Masked
                onAccept={value => {
                    dispatch({expYear: value})
                }}
                value={state.expYear}
                name={'expirationYear'}
                mask={[
                    {
                        mask: '00',
                    },
                ]}
                placeholder={'AÑO'}
            />
        </div>
        <div className='mb-6'>
            <Input.Masked
                onAccept={value => {
                    dispatch({cvv: value})
                }}
                value={state.cvv}
                placeholder={'CVV'}
                name={'cvv'}
                mask={Number}
                max={9999}
            />
        </div>
    </div>
    
</form>
}