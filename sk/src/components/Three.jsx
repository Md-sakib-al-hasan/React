import MyContext from "../MYContext";
import { useContext } from "react";
const Three = () => {
    const context = useContext(MyContext)
    const {s,k} = context
    return (
        <div>
               <p>This is one page {s.name}{k.name}</p>
        </div>
    );
};

export default Three;