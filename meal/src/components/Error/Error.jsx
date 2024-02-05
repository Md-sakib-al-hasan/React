import { useRouteError } from "react-router-dom";


const Error = () => {
    const {data,status} = useRouteError();
    return (
        <div className=" flex justify-center items-center">
                <span>{status}</span>
                <details className="collapse bg-base-200">
                    <summary className="collapse-title text-xl font-medium">Show me data</summary>
                    <div className="collapse-content"> 
                        <p>{data}</p>
                    </div>
                </details>
            
        </div>
    );
};

export default Error;