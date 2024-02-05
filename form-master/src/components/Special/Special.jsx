import { useContext } from "react";
import {Themcontext} from '../Granppa/Granppa';


const Special = () => {
    const value = useContext(Themcontext);
            console.log(value);
    return (
        <div>
            <h2>Special</h2>
            <p>{value}</p>
        </div>
    );
};

export default Special;