export default function Form() {
    return <form
    onSubmit={handleSubmit}
    className='md:pl-8 pt-6 pb-8 mb-4'>
    <div className='mb-4 relative'>
        <MaskedInput
            onChange={(value, mask) => {
                setCardNumber(value)

                let ccicon = document.getElementById('ccicon')
                let ccsingle = document.getElementById('ccsingle')

                switch (mask.masked.currentMask.cardtype) {
                    case 'american express':
                        ccicon.innerHTML = icons.amex
                        ccsingle.innerHTML = iconsSingle.amex_single
                        swapColor('green')
                        break
                    case 'visa':
                        ccicon.innerHTML = icons.visa
                        ccsingle.innerHTML = iconsSingle.visa_single
                        swapColor('lime')
                        break
                    case 'diners':
                        ccicon.innerHTML = icons.diners
                        ccsingle.innerHTML = iconsSingle.diners_single
                        swapColor('orange')
                        break
                    case 'discover':
                        ccicon.innerHTML = icons.discover
                        ccsingle.innerHTML = iconsSingle.discover_single
                        swapColor('purple')
                        break
                    case 'jcb' || 'jcb15':
                        ccicon.innerHTML = icons.jcb
                        ccsingle.innerHTML = iconsSingle.jcb_single
                        swapColor('red')
                        break
                    case 'maestro':
                        ccicon.innerHTML = icons.maestro
                        ccsingle.innerHTML = iconsSingle.maestro_single
                        swapColor('yellow')
                        break
                    case 'mastercard':
                        ccicon.innerHTML = icons.mastercard
                        ccsingle.innerHTML = iconsSingle.mastercard_single
                        swapColor('lightblue')

                        break
                    case 'unionpay':
                        ccicon.innerHTML = icons.unionpay
                        ccsingle.innerHTML = iconsSingle.unionpay_single
                        swapColor('cyan')
                        break
                    default:
                        ccicon.innerHTML = ''
                        ccsingle.innerHTML = ''
                        swapColor('grey')
                        break
                }
            }}
            focusFn={() => setFlipped(false)}
            value={cardNumber}
            titulo={'NÚMERO DE TARJETA'}
            forInput={'cardNumber'}
            mask={[
                {
                    mask: '0000 000000 00000',
                    regex: '^3[47]\\d{0,13}',
                    cardtype: 'american express',
                },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
                    cardtype: 'discover',
                },
                {
                    mask: '0000 000000 0000',
                    regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
                    cardtype: 'diners',
                },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
                    cardtype: 'mastercard',
                },
                // {
                //     mask: '0000-0000-0000-0000',
                //     regex: '^(5019|4175|4571)\\d{0,12}',
                //     cardtype: 'dankort'
                // },
                // {
                //     mask: '0000-0000-0000-0000',
                //     regex: '^63[7-9]\\d{0,13}',
                //     cardtype: 'instapayment'
                // },
                {
                    mask: '0000 000000 00000',
                    regex: '^(?:2131|1800)\\d{0,11}',
                    cardtype: 'jcb15',
                },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^(?:35\\d{0,2})\\d{0,12}',
                    cardtype: 'jcb',
                },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
                    cardtype: 'maestro',
                },
                // {
                //     mask: '0000-0000-0000-0000',
                //     regex: '^220[0-4]\\d{0,12}',
                //     cardtype: 'mir'
                // },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^4\\d{0,15}',
                    cardtype: 'visa',
                },
                {
                    mask: '0000 0000 0000 0000',
                    regex: '^62\\d{0,14}',
                    cardtype: 'unionpay',
                },
                {
                    mask: '0000 0000 0000 0000',
                    cardtype: 'Unknown',
                },
            ]}
            dispatch={(appended, dynamicMasked) => {
                var number = (dynamicMasked.value + appended).replace(/\D/g, '')

                for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
                    let re = new RegExp(dynamicMasked.compiledMasks[i].regex)
                    if (number.match(re) != null) {
                        return dynamicMasked.compiledMasks[i]
                    }
                }
            }}
            placeholder={'1234 5678 9012 3456'}
        />
        <svg
            id='ccicon'
            className='ccicon !top-auto !bottom-1 right-2 !w-10'
            width='750'
            height='471'
            viewBox='0 0 750 471'
            version='1.1'></svg>
    </div>
    <div className='mb-4'>
        <label
            className='block mb-2 text-sm font-medium text-white'
            htmlFor='cardOwner'>
            TITULAR
        </label>
        <input
            onFocus={() => setFlipped(false)}
            onChange={ev => {
                setCardOwner(ev.target.value)
            }}
            value={cardOwner}
            className='bg-transparent border-2 border-verdigris text-white text-sm block w-full p-2.5 placeholder:text-white'
            id='cardOwner'
            type='text'
        />
    </div>
    <div>
        <p className='text-white mb-2'>EXPIRACIÓN</p>
    </div>
    <div className='mb-4 flex'>
        <div className='mr-2'>
            <MaskedInput
                onChange={value => {
                    setExpirationMonth(value)
                }}
                focusFn={() => setFlipped(false)}
                value={expirationMonth}
                forInput={'expirationMonth'}
                mask={[
                    {
                        mask: '00',
                    },
                ]}
                placeholder={'MES'}
                normalizeZeros={true}
                min={1}
                max={12}
            />
        </div>
        <div className='mr-2'>
            <MaskedInput
                onChange={value => {
                    setExpirationYear(value)
                }}
                focusFn={() => setFlipped(false)}
                value={expirationYear}
                forInput={'expirationYear'}
                mask={[
                    {
                        mask: '00',
                    },
                ]}
                placeholder={'AÑO'}
            />
        </div>
        <div className='mb-6'>
            <MaskedInput
                onChange={value => {
                    setCvv(value)
                }}
                focusFn={() => setFlipped(true)}
                value={cvv}
                placeholder={'CVV'}
                forInput={'cvv'}
                mask={Number}
                max={9999}
            />
        </div>
    </div>
    <div className='flex items-center justify-end'>
        <button
            type='button'
            onClick={() => dispatch({ pasoActual: 'reservacion' })}
            className='px-8 py-2 mb-3 mr-3 inline text-sm mt-2 max-w-max bg-white text-black rounded-md'>
            Regresar
        </button>
        <button
            type='submit'
            className='px-8 py-2 mb-3 inline text-sm mt-2 max-w-max bg-verdigris text-black rounded-md'>
            Finalizar
        </button>
    </div>
</form>
}