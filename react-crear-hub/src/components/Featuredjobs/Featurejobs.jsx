import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featurejobs = () => {
    const [jobs,setJobs] = useState([]);
    const [datalength,setdataLength] = useState(4);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl">Featured jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-2 gap-2">
            {
                jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job> )
            }
           </div>
           <div className={(datalength === jobs.length)? 'hidden':''}>
              <button onClick={() => setdataLength(jobs.length)} className="btn">Show all jobs</button>
           </div>
        </div>
    );
};

export default Featurejobs;