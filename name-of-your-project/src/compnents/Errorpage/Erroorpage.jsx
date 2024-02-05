import { Link, useRouteError } from "react-router-dom";


const Erroorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>opps!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>go back where you form</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Erroorpage;