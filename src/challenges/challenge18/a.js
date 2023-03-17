import React, { useState, useEffect, useRef, useCallback } from "react";

let listenerCallbacks = new WeakMap();

const handleIntersections = (entries) => {
    entries.forEach((entry) => {
        if (!listenerCallbacks.has(entry.target)) {
            return;
        }

        let callback = listenerCallbacks.get(entry.target);

        if (!entry.isIntersecting) {
            return;
        }

        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        callback();
    });
};

let observer = new IntersectionObserver(handleIntersections, {
    rootMargin: "0px",
    threshold: "0.15",
});

const Image = ({ src, width, height }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    const callback = useCallback(() => {
        setIsInView(true);
    }, [setIsInView]);

    useEffect(() => {
        listenerCallbacks.set(ref.current, callback);
        observer.observe(ref.current);

        return () => {
            listenerCallbacks.delete(ref.current);
            observer.unobserve(ref.current);
        };
    }, [ref, callback]);

    return (
        <div
            ref={ref}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: "100%",
            }}
        >
            {isInView && (
                <img
                    src={src}
                    alt=""
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                />
            )}
        </div>
    );
};

const Demo = () => {
    const src = "https://timmousk.com/wp-content/uploads/2022/08/cover-9.png";

    return (
        <>
            <div
                style={{
                    height: "2000px",
                    width: "100%",
                    position: "relative",
                }}
            ></div>
            <Image src={src} height={100} width={100} />
        </>
    );
};

export default Demo;
