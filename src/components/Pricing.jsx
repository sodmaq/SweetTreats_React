function Pricing() {
  const plans = [
    {
      title: "Plan 1",
      description: "Description for plan 1",
      image: "https://via.placeholder.com/150",
      price: "$129",
    },
    {
      title: "Plan 2",
      description: "Description for plan 2",
      image: "https://via.placeholder.com/150",
      price: "$149",
    },
    {
      title: "Plan 3",
      description: "Description for plan 3",
      image: "https://via.placeholder.com/150",
      price: "$99",
    },
    {
      title: "Plan 4",
      description: "Description for plan 4",
      image: "https://via.placeholder.com/150",
      price: "$199",
    },
    {
      title: "Plan 5",
      description: "Description for plan 5",
      image: "https://via.placeholder.com/150",
      price: "$179",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-7xl mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase">
                {plan.title}
              </h1>
              <p className="mt-1 text-sm text-gray-600">{plan.description}</p>
            </div>
            <img
              className="object-cover w-full h-48 mt-2"
              src={plan.image}
              alt={plan.title}
            />
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">{plan.price}</h1>
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
