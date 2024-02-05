
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveApplication } from "../../Utlity/loacaStroge";


const JobDeatails = () => {
    const jobs = useLoaderData();
    const  {id} = useParams();
    const idint = parseInt(id);
    const job = jobs.find(jo => jo.id === idint);
    const handleApplyJob = () => {
        SaveApplication(idint);
        toast("you have applid succfully")
    }
    return (
        <div>
            <h2>Job Eatils of : {id} </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3"> <h2 className="text-4xl">Deatails</h2></div>
                <div className="border "><h2 className="text-2xls">side things
                <button onClick={handleApplyJob} className="btn btn-primary w-full"> Apply Now</button>
                </h2></div>
               

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDeatails;