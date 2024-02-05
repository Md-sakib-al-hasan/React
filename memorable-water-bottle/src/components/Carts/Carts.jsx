import PropTypes from "prop-types";
import './carts.css'
const Carts = ({cart}) => {
    return (
        <div className="cart-container">
              <h4>Cart : {cart.length}</h4>
              <div>
                {cart.map(bottle => <img key={bottle[0].id} src={bottle[0].img}></img>)}
              </div>
        </div>
    );
};


export default Carts;