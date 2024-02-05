import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const priceOptins = ({options}) => {
    const {name ,price,features} = options;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white text-center">
            <h2>
                <span className="text-7xl font-bold">
                    {price}
                </span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl my-8">{name}</h4>
            <div className="pl-6 flex-grow ">
            {
                features.map((feature,id) => <Feature key={id} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-400 w-full py-2 font-bold rounded-lg hover:bg-green-800">Buy now</button>
        </div>
    );
};
priceOptins.propTypes = {
    options: PropTypes.object
}
export default priceOptins;