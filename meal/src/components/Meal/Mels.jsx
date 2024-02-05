import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

const Mels = ({meal}) => {
    const native = useNavigate();
    const {strCategory,strCategoryDescription} = meal
    const haneld = ()=> {
            native(`/meals/${strCategory}`)
    }
    return (
        <div className="flex">
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p className="flex-grow">{strCategoryDescription}</p>
                    <div className="card-actions justify-end">
                    <button onClick={haneld} className="btn w-full btn-primary">Go to More deatails</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
Mels.propTypes = {
    meal: PropTypes.object,
}
export default Mels;