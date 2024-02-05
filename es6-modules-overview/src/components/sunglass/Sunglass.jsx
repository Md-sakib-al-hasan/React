import React from 'react';
import './sunglass.css'
import Watch from '../Watch/Watch';
import { add as sk , multiply } from '../../Utils/calculate';
const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = sk(first, second)
    const mul = multiply(first, second) 
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;