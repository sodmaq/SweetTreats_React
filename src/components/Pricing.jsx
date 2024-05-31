function Pricing() {
  const plans = [
    {
      title: "Cake",
      description:
        "Delicious, custom cakes for every celebration, crafted to perfection",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "N",
    },
    {
      title: "doughnuts",
      description: "Fluffy, flavorful doughnuts in a variety of toppings",
      image:
        "https://images.unsplash.com/photo-1618411640026-24e40dcde1ab?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "N",
    },
    {
      title: "Plantain Chips",
      description:
        "Crispy, seasoned plantain chips, a tasty and healthy snack.",
      image:
        "https://media.istockphoto.com/id/1499908363/photo/pile-of-dehydrated-fried-banana-chips-with-salt-top-view-chifles-tostones-o-patacones-top.jpg?s=612x612&w=0&k=20&c=rKqyUpEmLuL-2yFb0q1pxLd04kaVZZ3wNb5r7n0KjuA=",
      price: "N",
    },
    {
      title: "Small Chops",
      description: "Savory, bite-sized appetizers perfect for any party.",
      image:
        "data:image/jpeg;base64,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",
      price: "N",
    },
    {
      title: "Chin Chin",
      description: "Crispy, sweet chin chin, perfect for snacking anytime.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ssHzZVIRXxXKGA30NiqPUIzfmT7lKt3_KQ&s",
      price: "N",
    },
    {
      title: "Jar Cake",
      description: "Convenient, layered jar cakes for a sweet treat on the go.",
      image:
        "data:image/jpeg;base64,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",
      price: "N",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-7xl mx-auto py-10" id="product">
      <div className="text-center mb-10">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
        My Delicious Offerings
        </h2>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-2 gap-6">
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
