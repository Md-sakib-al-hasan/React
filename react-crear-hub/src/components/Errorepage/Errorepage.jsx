import { Link } from "react-router-dom";


const Errorepage = () => {
    return (
        <div>
            <h2>Opps!</h2>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default Errorepage;