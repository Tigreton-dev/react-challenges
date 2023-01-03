export const description = `
<h1 class='text-xl'>Infinity Scroll</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Render a list of numbers as it were data fetching from an API, when the scroll reach the end, 
it will fetch more data "numbers".

- At first it must render 30 numbers.
- The rest of fetch data should get 20 numbers.
- while data is fetching, it must render next text: "data fetching..."
- In order to simulate data fetching from API every fetch must delay 2 seconds.
</pre></code>
`;

export const code = `
.InfiniteScroll {
    text-align: left;
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: 200px;
    overflow: scroll;
}

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
`.trim();
