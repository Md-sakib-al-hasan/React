import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
    const[open,setOpen] = useState(false)
    const routes = [
        {id:1,path:'/',name:'Home'},
        {id:2,path:'/about',name:'About'},
        {id:3,path:'/services',name:'Services'},
        {id:4,path:'/Contact',name:'Contact'},
        {id:5,path:'*',name:'NotFound'},
    ]
    return (
        <nav className="text-black bg-yellow-200 p-3">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open) }>
                {
                    open ? <IoIosCloseCircleOutline />  :  <FiMenu    />
                }
               
            </div>
            
           <ul className={` md:flex md:static absolute duration-1000 bg-yellow-200 px-6  ${open ? 'top-12' : '-top-60'}`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default Navbar;