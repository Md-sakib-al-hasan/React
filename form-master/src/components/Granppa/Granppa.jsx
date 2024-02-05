
import Dad from '../Dad/Dad'
import Uncle from '../Uncle/Uncle';
import Anuty from '../Anutry/Anuty';
import './granppa.css'
import { createContext } from 'react';

export const  Themcontext = createContext('gold')


const Granppa = () => {
    return (
        <div className='grandpa'>
            <h2>Granpa</h2>
            <section className='flex'>
            <Themcontext.Provider value="sk">
                <Dad></Dad>
                <Uncle></Uncle>
                <Anuty></Anuty>
            </Themcontext.Provider>
             
            
            </section>
        </div>
    );
};

export default Granppa;