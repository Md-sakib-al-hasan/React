import { useEffect, useState } from "react";
import PhonesCard from "../../Components/Phones/PhonesCard";

const Favorites = () => {
  const [phones, setPhone] = useState([]);
  const [showphones, setShowPhones] = useState(4);
  const [totalPrice, setTotalPrice] = useState(0);
  const handle_delet = () => {
    localStorage.clear();
    setPhone([]);
  };

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteItems) {
      setPhone([]);
    } else {
      setPhone(favoriteItems);
      const total = favoriteItems.reduce(
        (prevent, current) => prevent + current.price,
        0
      );
      setTotalPrice(total);
    }
  }, []);
  return (
    <div className=" text-center justify-center items-center mx-auto">
      {phones.length > 0 ? (
        <button
          onClick={handle_delet}
          className="px bg-green-200 black mx-about"
        >
          Delete All favorites{" "}
        </button>
      ) : (
        <div className="text-center text-red-500">No data found</div>
      )}
      <div> total Prices :{totalPrice}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-3">
        {phones?.slice(0, showphones).map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
      {phones.length > 4 ? (
        showphones == 4 ? (
          <button
            onClick={() => setShowPhones(phones.length)}
            className="btn btn-primary"
          >
            All show
          </button>
        ) : (
          <button onClick={() => setShowPhones(4)} className="btn btn-primary">
            see less
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Favorites;
