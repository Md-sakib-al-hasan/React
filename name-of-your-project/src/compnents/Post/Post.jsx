import { useLoaderData, useNavigate } from "react-router-dom";


const Post = () => {
    const post = useLoaderData();
    const nagigate = useNavigate()
    const handeler = () => {
            nagigate(-1);
    }
    return (

        <div>
            <h1>only post :{post.title}</h1>
            <button onClick={handeler}>Go back</button>
        </div>
    );
};

export default Post;

