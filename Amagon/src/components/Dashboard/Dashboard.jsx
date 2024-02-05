import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-[20%] bg-red-100">
                <ul>
                <li><NavLink className={({isActive,isPending}) => isPending ? "bg-white" : isActive ? "bg-green-400" : ''} to='/dashboard/editeprofile'>Edite Proile</NavLink></li>
                <li><Link to='/dashboard/profile'>Profile</Link></li>
                <li><Link to='/dashboard'>Dashbord</Link></li>
                </ul>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;