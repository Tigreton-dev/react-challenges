import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";
import useDebounce from "./useDebounce";

export default function Demo() {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    // Fetch API (optional)
    useEffect(() => {
    }, [debouncedValue])

    return (
        <div className="CenterElements">
            <p>Value real-time: {value}</p>
            <p>Debounced value: {debouncedValue}</p>

            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}