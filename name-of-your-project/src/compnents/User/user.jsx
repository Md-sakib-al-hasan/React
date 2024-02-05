import { useLoaderData } from "react-router-dom";
import Us from "./Us/Us";
import '../User/use.css'
const User = () => {
    const us = useLoaderData();
    return (
        <div>
            <h2>OUr users : {us.length}</h2>
            <div className="users">
                {
                    us.map((use) => <Us use={use} key={use.id}></Us>)
                }
            </div>

        </div>
    );
};

export default User;