import { Dispatch } from "react"

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
}