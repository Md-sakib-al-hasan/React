import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PhonesDetails = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();
  useEffect(() => {
    const phone = phones?.filter((phone) => phone.id === id);
    setPhone(phone[0]);
  }, [id, phones]);
  const { phone_name, brand_name, rating, price, image } = phone || {};

  const handleFavorites = () => {
    const addFavoritesArray = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (!favoriteItems) {
      addFavoritesArray.push(phone),
        localStorage.setItem("favorites", JSON.stringify(addFavoritesArray));
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      const ex = favoriteItems.find((favorites) => favorites.id === id);
      if (!ex) {
        addFavoritesArray.push(...favoriteItems, phone),
          localStorage.setItem("favorites", JSON.stringify(addFavoritesArray));
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Allreay exited successfully",
          text: "That thing is still around?",
          icon: "question",
        });
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="relative flex justify-center  flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
            src={image}
            alt="card-image"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {brand_name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {phone_name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={handleFavorites}
            className="btn w-full bg-blue-400 py-2 rounded-md"
          >
            Favarites
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhonesDetails;
