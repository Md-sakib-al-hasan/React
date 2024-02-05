import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <p>Uncle</p>
            <section>
                <Cousin name="Rafsan"></Cousin>
                <Cousin name="Sohana"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;