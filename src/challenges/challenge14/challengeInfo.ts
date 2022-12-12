export const description = `
<h1 class='text-xl'>Import dynamic Components</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Render 3 buttons that when clicked it will render dynamically different component.
</pre></code>
`;

export const code = `
.lazyLoading {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    height: 100%;
    min-height: 400px;
}
.lazyLoading button {
    background: rgb(37 99 235);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.lazyLoading .component {
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    display: flex;
    
}

const Component1 = () => {
    return (
        <div>
            <h1>Component 1</h1>
        </div>
    )
}

export default Component1

const Component2 = () => {
    return (
        <div>
            <h1>Component 2</h1>
        </div>
    )
}

export default Component2

const Component3 = () => {
    return (
        <div>
            <h1>Component 3</h1>
        </div>
    )
}

export default Component3

import { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react';
import './Demo.css'

const Demo = () => {
    const [Component, setComponent] = useState<React.ComponentType<any>>(() => lazy(() => import('./Component1')))

    useEffect(() => {
        const componentLoaded = lazy(() => import('./Component1'));
        setComponent(componentLoaded)
    }, [])

    const clickHandler = (componentName: string) => {
        const componentLoaded = lazy(() => import('./$componentName}'));
        setComponent(componentLoaded)
    }

    return (
        <div className='lazyLoading'>
            <div>
                <button onClick={() => clickHandler('Component1')}>Component 1</button>
                <button onClick={() => clickHandler('Component2')}>Component 2</button>
                <button onClick={() => clickHandler('Component3')}>Component 3</button>
            </div>
            <div className='component'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </div>
        </div>
    )
}

export default Demo
`.trim();
