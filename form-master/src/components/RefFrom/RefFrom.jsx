import { useEffect, useRef } from "react";


const RefFrom = () => {
    const nameref = useRef(null);
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
           console.log(nameref.current.value)
           console.log(emailref.current.value)
           console.log(passwordref.current.value)
    };
    useEffect(() =>{
        passwordref.current.focus();
    },[])
      return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameref} type="text" name="name" />
                <br />
                <input ref={emailref} defaultValue={"123  "} type="email" name="email" />
                <br />
                <input ref={passwordref} type="password" name="password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RefFrom;