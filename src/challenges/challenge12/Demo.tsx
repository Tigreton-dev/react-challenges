import * as React from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import "./Demo.css";

export default function Demo() {

    return (
        <div className="reactHOC">
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
}
