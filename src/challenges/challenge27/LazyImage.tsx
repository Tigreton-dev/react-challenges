import React, { useEffect, useRef, useState } from 'react';

interface Iprops {
    src: string;
}

const Image = (props: Iprops) => {
    let { src } = props;
    const imageRef = useRef<HTMLImageElement>(null)
    const [intersected, setIntersected] = useState(false)
    const observer = useRef<IntersectionObserver>(new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIntersected(true)
                observer.current.disconnect();
            }
        })

    }, { threshold: 1 }))

    useEffect(() => {
        const img = imageRef.current as HTMLImageElement
        observer.current.observe(img);

        return () => observer.current.disconnect();
    }, [])

    return (
        <img
            src={intersected ? src : ''}
            alt='image'
            ref={imageRef}
            style={{height: '100%', width:'100%'}}
        />
    );
}

export default Image;