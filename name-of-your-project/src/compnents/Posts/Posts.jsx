import { Link, useLoaderData, useNavigate } from "react-router-dom";
import '../User/use.css'
const Posts = () => {
    const post = useLoaderData();
    const nagivate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
     const   handeShowdetail = (userId) => {
        nagivate(`/post/${userId}`);
     }
    
    return (
        <div>
            <h2>Posts :{post.length}</h2>
             <div className="users">
             {
                post.map(ps =><div style={postStyle} key={ps.id}>{ps.title} <Link to={`/post/${ps.userId}`}>show details meore</Link> <button onClick={() =>handeShowdetail(ps.userId)}>Click to see deatils</button> </div>)
            }

             </div>
        </div>
    );
};

export default Posts;