import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Spiner from "../Spriner/Spiner";


const Mainlaout = () => {
    const navigation = useNavigation();
    const st = navigation.state == 'loading';
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
            <div>
                <h1 className="text-xl font-bold">Amajon</h1>
            </div>
                <nav>
                   
                    <ul className="flex gap-5">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </nav>
            </section>
             {!st ? <div className="min-h-screen">
                <Outlet></Outlet>
            </div> : <Spiner></Spiner>}
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlaout;