import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

const Image = ({ src }) => {
    const [intersected, imageRef] = useIntersectionObserver();

    return (
        <figure ref={imageRef} className="min-h-[224px] rounded-md overflow-hidden bg-neutral-600">
            {intersected && <img src={src} alt="lazy animal" />}
        </figure>
    );
}

export default Image;