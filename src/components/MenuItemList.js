const menuMock = {
  restaurant: {
    id: "420472",
    name: "Green Leaf Kitchen",
    city: "Gautam Buddh Nagar",
    cuisines: ["North Indian", "Chinese", "Fast Food"],
    avgRating: 4.3,
    costForTwo: "₹350 for two",
  },

  categories: [
    {
      title: "Starters",
      items: [
        {
          id: "101",
          name: "Paneer Tikka",
          description: "Char-grilled cottage cheese with spices",
          price: 22000,
          imageId: "paneer_tikka",
          isVeg: true,
        },
        {
          id: "102",
          name: "Veg Manchurian",
          description: "Crispy veg balls tossed in Indo-Chinese sauce",
          price: 18000,
          imageId: "veg_manchurian",
          isVeg: true,
        },
      ],
    },

    {
      title: "Main Course",
      items: [
        {
          id: "201",
          name: "Butter Paneer Masala",
          description: "Creamy tomato gravy with soft paneer cubes",
          price: 26000,
          imageId: "butter_paneer",
          isVeg: true,
        },
        {
          id: "202",
          name: "Dal Makhani",
          description: "Slow cooked black lentils with butter",
          price: 20000,
          imageId: "dal_makhani",
          isVeg: true,
        },
      ],
    },

    {
      title: "Breads & Rice",
      items: [
        {
          id: "301",
          name: "Butter Naan",
          description: "Soft naan brushed with butter",
          price: 5000,
          imageId: "butter_naan",
          isVeg: true,
        },
        {
          id: "302",
          name: "Veg Biryani",
          description: "Fragrant basmati rice with mixed vegetables",
          price: 22000,
          imageId: "veg_biryani",
          isVeg: true,
        },
      ],
    },

    {
      title: "Desserts",
      items: [
        {
          id: "401",
          name: "Gulab Jamun",
          description: "Soft milk dumplings soaked in sugar syrup",
          price: 9000,
          imageId: "gulab_jamun",
          isVeg: true,
        },
        {
          id: "402",
          name: "Ice Cream",
          description: "Vanilla scoop with chocolate sauce",
          price: 8000,
          imageId: "ice_cream",
          isVeg: true,
        },
      ],
    },
  ],
};

export default menuMock;
