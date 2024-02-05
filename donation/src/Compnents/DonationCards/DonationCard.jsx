import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const {
    picture,
    title,
    category,
    category_bg,
    text_button_bg,
    description,
    price,
    card_bg,
    id,
  } = donate;
  return (
    <div>
      <Link to={`/Donations/${id}`}>
        <div
          className="card  bg-base-100 shadow-xl flex "
          style={{ backgroundColor: card_bg }}
        >
          <figure>
            <img className="w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body flex">
            <span
              style={{ text: text_button_bg, backgroundColor: category_bg }}
              className="py-1 px-2 w-24 text-center"
            >
              {category}
            </span>
            <h2
              style={{ color: text_button_bg }}
              className="card-title flex-grow"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
