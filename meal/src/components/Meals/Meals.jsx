import { useLoaderData } from "react-router-dom";
import Mels from "../Meal/Mels";

const Meals = () => {
    const {categories} = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-3 gap-2 mr-2">
                {
                    categories.map(meal => <Mels key={meal.idCategory} meal={meal}></Mels> )
                }
            </div>
        </div>
    );
};

export default Meals;