import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrdjobAppliciton } from "../../Utlity/loacaStroge";



const Appliedjobs = () => {
     const jobs = useLoaderData();
     const  [appliedjobs,setAppliedjobs] = useState([]);

     useEffect(() => {
        const storedJobIds =  getStrdjobAppliciton();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedjobs(JobsApplied);
        }
     },[])
    return (
        <div>
            <h2>Jobs i applied {appliedjobs.length}</h2>
        </div>
    );
};

export default Appliedjobs;