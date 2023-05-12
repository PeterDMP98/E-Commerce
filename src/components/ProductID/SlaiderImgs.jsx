import { useState } from 'react'
import './styles/slaiderImgs.css'

/*product.images.length*/
const SlaiderImgs = ({ product }) => {

    /*separacion entre lineas "line-height: (numero)" */

    const [numberImg, setnuNberImg] = useState(0)

    const onStyle = {
        transform:` translateX(calc(-${numberImg}/${3} * 100%))`
    }

    const hanldePrev = () => {
        if (numberImg - 1 <  0) {
            setnuNberImg(2)
        } else {
            setnuNberImg(numberImg-1)
        }
        
    }

    const hanldeNext = () => {
        if (numberImg + 1 >  2) {
            setnuNberImg(0)
        } else {
            setnuNberImg(numberImg+1)
        }
    }

    return (
        <div className='slider'>
            <button onClick={hanldePrev} className='slicer__arrowhead slider__left'>&#60;</button>
            
            <div style={onStyle} className='slider__Interior'>
                {
                    product?.images.map(imgInfo => (
                        <div key={imgInfo.id} className='slider__img-container'>
                            <img className='slider__img' key={imgInfo.id} src={imgInfo.url} alt="" />
                        </div>
                    ))
                }
            </div>
            <button onClick={hanldeNext} className='slicer__arrowhead slider__rigth'>&#62;</button>
        </div>
    )
}

export default SlaiderImgs