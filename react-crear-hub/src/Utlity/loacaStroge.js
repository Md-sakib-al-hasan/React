


export const SaveApplication = id => {
   const strogeApplicitionjob = getStrdjobAppliciton();
   const exist = strogeApplicitionjob.find(joId => joId == id);
   if(!exist){
     strogeApplicitionjob.push(id);
     localStorage.setItem('job-applications', JSON.stringify(strogeApplicitionjob));
   }
}
export const getStrdjobAppliciton = () => {
    const strogeApplicitionjob = localStorage.getItem('job-applications');
    if (strogeApplicitionjob){
        return JSON.parse(strogeApplicitionjob)
    }else{
        return []
    }
}

