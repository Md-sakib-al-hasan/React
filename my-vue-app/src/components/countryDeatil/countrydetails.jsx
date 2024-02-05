import Cn from '../countryman/cn.jsx'
const Countrydetails = ({handleflag,country,handleVisitedcountries}) => {
    return (
        <div>
            <h4>Country Deatails</h4>
            <Cn
              han={handleflag}
              coun = {country}
              vis = {handleVisitedcountries}
            >
               
            </Cn>
        </div>
    );
};

export default Countrydetails;