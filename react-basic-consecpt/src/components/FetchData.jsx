import { useEffect } from "react";

const FetchData = () => {

   useEffect(()=>{
       const featchData = async () => {
           try{
                const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000")
                const data = await res.json()
                console.log(data)
           }catch(error){
                console.log("error")
           }
       }
       featchData()
   },[])

    return (
        <div>
            
        </div>
    );
};

export default FetchData;