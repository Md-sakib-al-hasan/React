
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,id} = job;
    return (
        <div>
           <div className="card  bg-base-100 shadow-xl flex">
                <figure className="flex-grow"><img  src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-lime-50 mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-lime-50 mr-4">{job_type}</button>
                    </div>
                    <div className="flex my-4 gap-2">
                    <div className="flex "> <IoLocationSharp size={24} />{location}</div>
                    <div  className="flex items-center"><MdOutlineCurrencyExchange size={24} />{salary}</div>

                    </div>
                    <div className="card-actions
                    ">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;