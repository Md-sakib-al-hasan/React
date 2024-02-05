import { NavLink, Outlet, useLocation, } from "react-router-dom";
import './home.css'

const Home = () => {
    const {pathname} = useLocation();
    const navigate = useLocation();
    console.log(navigate)
    return (
        <div  className="flex">
            <div className="w-1/4 ">
              <NavLink to={'/meals'} className={"block p-4"}><button className="btn w-full btn-success">meals</button></NavLink>
              <NavLink to={'/posts'} className={"block p-4"}><button className="btn w-full btn-success">users</button></NavLink>
              <NavLink to={'/'} className={"block p-4"} ><button className="btn w-full btn-success">Home</button></NavLink>
            </div>
            <div className="w-3/4">
                 { pathname!=='/' ? <Outlet></Outlet>:<p>This is home page</p> }
            </div>
        </div>
    );
};

export default Home;