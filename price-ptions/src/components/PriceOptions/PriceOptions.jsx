import PriceOptin from "../PriceOption/priceOptins";
const PriceOptions = () => {
  const  price_options= [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access",
            "Limited access to group fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to all basic features",
            "Unlimited access to group fitness classes",
            "Personalized workout plans",
            "Nutritional guidance"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "Access to all standard features",
            "Access to sauna and steam room",
            "Towel service included",
            "Discounts on personal training sessions",
            "Priority booking for classes",
            "Complimentary protein shakes"
          ]
        }
      ]
    return (
        <div className="mx-12">
            <h2 className="text-5xl">Best Prices  in the town </h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                price_options.map(option => <PriceOptin key={option.id} options={option}></PriceOptin> )
            }
           </div>
        </div>
    );
};

export default PriceOptions;