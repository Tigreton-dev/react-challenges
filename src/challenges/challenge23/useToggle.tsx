import React from 'react'

export function useToggle(initialValue: boolean) {
    const [value, setValue] = React.useState(initialValue);

    const toggle = React.useCallback(() => {
        setValue(v => !v);
    }, []);

    return [value, toggle];
}