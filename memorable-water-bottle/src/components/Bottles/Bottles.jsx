import { useEffect, useState } from "react";
import Bottle from "../Bottle/bottle";
import './bottles.css'
import { reciveddata, setData } from "../../utils/localstroge";
import Carts from "../Carts/Carts";
const Bottles = () => {
    const [bottles,setBottles ] =useState([])
    const [Cart,setCart] = useState(reciveddata())
   
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])
     useEffect(() =>
      { if(bottles.length >0)
        {
        const storedCart = reciveddata()
        const savecart = storedCart.map(id =>{
            const bo = bottles.filter(b => id === b.id)
            return bo
        })
        setCart(savecart)

        
    }
      }
     ,[bottles])
    const handleAddCart = (bottle) =>{
        setData(bottle.id)
        setCart(reciveddata())
    }
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <h2>PurChase list : {Cart.length}</h2>
            <div>
                <Carts cart={Cart} ></Carts>
            </div>
         <div className="bottle-container">
            {
                bottles.map(bottle => 
                <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleAddCart={handleAddCart}

                >
                </Bottle>)
            }
         </div>
        </div>
    );
};

export default Bottles;