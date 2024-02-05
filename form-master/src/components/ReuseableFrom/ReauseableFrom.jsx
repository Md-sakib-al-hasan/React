

const ReauseableFrom = ({formtitle,submittext="Submit"}) => {
    const handleSubmit = (e) => {
            e.preventDefault();
    }

    return (
        <div>
            <p>{formtitle}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submittext}></input>
            </form>
            
        </div>
    );
};

export default ReauseableFrom;