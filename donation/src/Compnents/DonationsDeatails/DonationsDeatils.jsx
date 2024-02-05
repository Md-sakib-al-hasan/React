import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationsDeatils = () => {
  const [data, setData] = useState({}) || {};
  const { id } = useParams();
  const idint = parseInt(id, 10);

  useEffect(() => {
    fetch("../../../public/donation.json")
      .then((res) => res.json())
      .then((data) => {
        const finaldata = data?.find((donation) => donation.id === idint);
        console.log(finaldata);
        setData(finaldata);
        return;
      });
  }, [id]);
  const { picture, title, description, text_button_bg } = data || {};
  return (
    <div>
      <div>
        <div>
          <img src={picture[2]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DonationsDeatils;
