import { useLoaderData, useParams } from "react-router-dom";


const Showuse = () => {
    const user = useLoaderData();
    const {userId} = useParams();
    const {name,website} = user;
    return (
        <div>
            <h1>Deatils about user</h1>
            <p>{name}</p>
            <p>Website: {website}</p>
            <h1>{userId}</h1>
        </div>
    );
};

export default Showuse;