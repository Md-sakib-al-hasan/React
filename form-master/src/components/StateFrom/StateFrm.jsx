import { useState } from "react";


const StateFrm = () => {
    const [email,setEmail] = useState(null)
    const [name,setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleonChanegeemail = e => {
        setEmail(e.target.value)
    }
    const handleonChanegename = e => {
        setName(e.target.value)
    }
     return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleonChanegename} />
                <br />
                <input onChange={handleonChanegeemail}
                
                
                type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>{name}{email}</p>
        </div>
    );
};

export default StateFrm;