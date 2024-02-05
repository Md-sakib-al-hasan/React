import DonationCard from "./DonationCard";

const DonationCards = ({ Donations }) => {
  return (
    <div className="mt-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Donations?.map((donate, id) => (
          <DonationCard key={id} donate={donate}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default DonationCards;
