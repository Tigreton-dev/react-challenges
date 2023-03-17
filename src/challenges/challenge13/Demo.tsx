import { lazy, Suspense, useState } from 'react';
import './Demo.css'

const Demo = () => {
    const [Component, setComponent] = useState<React.ComponentType<any>>(() => lazy(() => import(`./Component1`)))

    const clickHandler = (componentName: string) => {
        const componentLoaded = lazy(() => delayForDemo(import(`./${componentName}`)));
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

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    }).then(() => promise);
}