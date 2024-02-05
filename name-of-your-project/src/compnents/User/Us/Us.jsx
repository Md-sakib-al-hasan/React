import { Link, useParams } from "react-router-dom";


const Us = ({use}) => {
    const {id,name,email,phone} =use;
    const {userId} = useParams();
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>email: {email}</h2>
            <h2>phone: {phone}</h2>
            <h1>{userId}</h1>
            <Link to={`/user/${id}`} >show Details</Link>
        </div>
    );
};

export default Us;