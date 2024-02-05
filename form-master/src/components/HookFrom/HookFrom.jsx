import useInputState from "../Hook/useinputhook";
const HookFrom = () => {
    const  namec = useInputState('rana');
    const handleSubmit =(e) =>{
        e.preventDefault();
       console.log(namec.value);

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input {...namec} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookFrom;