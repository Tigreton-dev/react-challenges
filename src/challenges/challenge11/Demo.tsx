import * as React from 'react'
import DataProvider from './Context'
import ComponentA from './components/ComponentA'
import "./Demo.css";

export default function Demo() {

    return (
        <div className="reactContext">
            <DataProvider>
                <ComponentA />
            </DataProvider>
        </div>
    );
}
