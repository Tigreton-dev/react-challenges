import { useState, useRef, useEffect } from "react";

export const useIntersectionObserver = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [intersected, setIntersected] = useState(false);
    const observer = useRef<IntersectionObserver>(
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIntersected(true);
                        observer.current.disconnect();
                    }
                });
            },
            { threshold: 1 }
        )
    );

    useEffect(() => {
        const img = imageRef.current as HTMLImageElement;
        observer.current.observe(img);

        return () => observer.current.disconnect();
    }, []);

    return [intersected, imageRef];
};
