import { useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
             <i>{error.statusText || error.message}</i>
        </div>
    );
};

export default Errorpage;