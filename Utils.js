import PinMoto from './MainIcon'
import { ReactDOM } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { divIcon } from 'leaflet'

export const getRequiredSVGPinByCategory = (category, myStyle) => {
    let pin
    switch (category) {
        case 'motorcycle':
            pin = <PinMoto {...myStyle} />
            break;
        case 'truck':
            // pin = <PinCaminhao {...myStyle} />
            break;
        default:
            //pin = <PinPadrao {...myStyle}/>
            break;
    }
    const iconMarkup = renderToStaticMarkup(
        pin
    )
    const customMarketIcon = divIcon({
        html: iconMarkup
    })
    return customMarketIcon
}
