import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className="text-2xl text-center">All categories Phones</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
