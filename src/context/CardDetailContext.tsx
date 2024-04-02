import { createContext } from "react";

import {defaultParamsCardDetails} from '../assets/defaultParams'
import { TCardDetailContext } from "../types/cardDetail";

const CardDetailContext = createContext<TCardDetailContext>({state:defaultParamsCardDetails, dispatch: () => {}})

export default CardDetailContext