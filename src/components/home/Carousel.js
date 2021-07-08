import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import './Carousel.image.css';


const images = [
    require('../../assets/images/image-1.jpg').default,
    require('../../assets/images/image-2.jpg').default,
    require('../../assets/images/image-3.jpg').default,
]


function Carousel() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const newValue = selected < images.length - 1 ? selected + 1 : 0
            setSelected(newValue)
        }, 5000)
        return () => clearInterval(interval)
    }, [selected])

    return (
        <div className="App-Carousel">
            {images.map((image, index) => (
                <img key={index} src={image} className={classnames("App-bg", { "fade-in": selected === index, "fade-out": selected !== index })} alt="app-bg" />
            ))}
        </div>
    )
}


export default Carousel;
