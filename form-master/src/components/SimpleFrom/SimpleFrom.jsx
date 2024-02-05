

const SimpleFrom = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
    }
    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="text" name="name" />
                <br></br>
                <button type="submit" >submit</button>
            </form>
        </div>
    );
};

export default SimpleFrom;