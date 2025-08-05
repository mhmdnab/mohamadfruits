export default function MenuSection() {
  const menuItems = {
    "Fresh Juice": [
      {
        name: "Strawberries",
        price: "$4.50",
        description: "Sweet and juicy seasonal strawberries",
      },
      {
        name: "Bananas",
        price: "$2.00",
        description: "Perfect yellow bananas, great for snacking",
      },
      {
        name: "Green Apples",
        price: "$3.00",
        description: "Crisp and tart Granny Smith apples",
      },
      {
        name: "Purple Grapes",
        price: "$5.00",
        description: "Sweet seedless grapes, perfect for sharing",
      },
      {
        name: "Fresh Cherries",
        price: "$6.50",
        description: "Sweet red cherries, in season",
      },
      {
        name: "Tropical Mango",
        price: "$4.00",
        description: "Ripe and sweet tropical mango",
      },
    ],
    "Fresh Cocktails": [
      {
        name: "Berry Blast",
        price: "$8.50",
        description: "Mixed berries with fresh mint and lime",
      },
      {
        name: "Tropical Paradise",
        price: "$9.00",
        description: "Mango, pineapple, and coconut blend",
      },
      {
        name: "Green Garden",
        price: "$7.50",
        description: "Apple, cucumber, and fresh herbs",
      },
      {
        name: "Purple Power",
        price: "$8.00",
        description: "Grape and blueberry antioxidant mix",
      },
      {
        name: "Cherry Fizz",
        price: "$7.00",
        description: "Fresh cherries with sparkling water",
      },
      {
        name: "Citrus Splash",
        price: "$6.50",
        description: "Orange, lemon, and grapefruit blend",
      },
    ],
    Plates: [
      {
        name: "Strawberry Banana",
        price: "$6.00",
        description: "Classic combo with yogurt and honey",
      },
      {
        name: "Green Goddess",
        price: "$7.00",
        description: "Spinach, apple, banana, and ginger",
      },
      {
        name: "Purple Berry",
        price: "$6.50",
        description: "Blueberries, blackberries, and banana",
      },
      {
        name: "Tropical Twist",
        price: "$7.50",
        description: "Mango, pineapple, and coconut milk",
      },
    ],
  };

  return (
    <section id="menu" className="w-full min-w-0 py-12 md:py-16 bg-[#B1D8B7]">
      <div className="w-full min-w-0 px-4 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Fresh</span> Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of fresh fruits, refreshing cocktails, and
            healthy smoothies
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {Object.entries(menuItems).map(([category, items], categoryIndex) => (
            <div key={category} className="w-full">
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    categoryIndex === 0
                      ? "text-green-600"
                      : categoryIndex === 1
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {category}
                </h3>
                <div
                  className={`w-20 h-1 mx-auto rounded-full ${
                    categoryIndex === 0
                      ? "bg-green-400"
                      : categoryIndex === 1
                      ? "bg-orange-400"
                      : "bg-green-400"
                  }`}
                ></div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-2  lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-800 flex-1">
                        {item.name}
                      </h4>
                      <span
                        className={`md:text-xl text-md font-bold ml-4 ${
                          categoryIndex === 0
                            ? "text-green-600"
                            : categoryIndex === 1
                            ? "text-orange-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
