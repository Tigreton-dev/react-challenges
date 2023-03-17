import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

export default function Demo() {
    const containerRef = useRef(null)
    const [isFetching, setIsFetching] = useState(false);
    const [listItems, setListItems] = useState(
        Array.from(Array(30).keys(), n => n + 1)
    );

    useEffect(() => {
        const handleScroll = () => {
            const containerHeight = containerRef.current.offsetHeight;
            const containerScroll = containerRef.current.scrollTop;
            const containerScrollHeight = containerRef.current.scrollHeight;
            if (containerHeight + containerScroll > containerScrollHeight) setIsFetching(true);
        };

        containerRef.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const fetchMoreListItems = () => {
            setTimeout(() => {
                setListItems(prevState => [
                    ...prevState,
                    ...Array.from(Array(20).keys(), n => n + prevState.length + 1)
                ]);
                setIsFetching(false);
            }, 2000);
        };

        if (isFetching) fetchMoreListItems();
    }, [isFetching]);

    return (
        <div className="InfiniteScroll" ref={containerRef}>
            <ul className="InfiniteScroll-list">
                {listItems.map((listItem, n) => (
                    <li key={n} className="InfiniteScroll-list-item">
                        List Item {listItem}
                    </li>
                ))}
            </ul>
            {isFetching && "Fetching data..."}
        </div>
    );
}