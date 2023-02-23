import React, { useState, useEffect, useRef } from "react";
import "./Demo.css";
import { useToggle } from './useToggle'

export default function Demo() {
    const [isDarkMode, toggleDarkMode] = useToggle(false);

    return (
        <div className="snake">
            <button onClick={toggleDarkMode}>
                Toggle color theme {isDarkMode ? 'on' : 'off'}
            </button>
        </div>
    );
}