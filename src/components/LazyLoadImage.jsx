import { useState, useEffect, useRef, createRef } from 'react'

import PlaceholderImg from "../img/palceholder.png"

const LazyLoadImage = ({ src, alt = "" }) => {
    const [imgSrc, setImgSrc] = useState(PlaceholderImg)
    const [entry, setEntry] = useState(false)

    const imgNode = useRef()

    const observer = useRef(
        new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting )
                setEntry(true)
        })
    );

    useEffect(() => {
        const { current: currentObserver } = observer;    

        if (!entry) {
            currentObserver.observe(imgNode.current)
        } else {
            currentObserver.disconnect()
        }

        return () => currentObserver.disconnect()
    }, [entry,imgNode])

    useEffect(() => {
        if (entry) setImgSrc(src)
    }, [entry,src])

    return (
        <div className="img-container">
            <img src={imgSrc} alt={alt} ref={imgNode} />
        </div>
    )
}

export default LazyLoadImage