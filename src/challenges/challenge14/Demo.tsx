import { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react';
import './Demo.css'

const Demo = () => {
    const [Component, setComponent] = useState<React.ComponentType<any>>(() => lazy(() => import(`./Component1`)))

    useEffect(() => {
        const componentLoaded = lazy(() => import(`./Component1`));
        setComponent(componentLoaded)
    }, [])

    const clickHandler = (componentName: string) => {
        const componentLoaded = lazy(() => import(`./${componentName}`));
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