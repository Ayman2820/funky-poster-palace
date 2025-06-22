
export const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "indian",
    rating: 4.5,
    deliveryTime: "30-45 mins",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    description: "Authentic Indian cuisine with traditional spices",
    featured: true,
    menuItems: [
      { id: 101, name: "Butter Chicken", price: 299, description: "Creamy tomato-based chicken curry", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 102, name: "Paneer Tikka", price: 249, description: "Grilled cottage cheese with spices", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop", category: "starter", veg: true },
      { id: 103, name: "Biryani", price: 349, description: "Fragrant basmati rice with aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03246963d396?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 104, name: "Dal Tadka", price: 199, description: "Yellow lentils tempered with spices", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop", category: "main", veg: true }
    ]
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "italian",
    rating: 4.3,
    deliveryTime: "25-35 mins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    description: "Wood-fired pizzas and Italian classics",
    featured: true,
    menuItems: [
      { id: 201, name: "Margherita Pizza", price: 299, description: "Fresh mozzarella, basil, and tomato sauce", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop", category: "main", veg: true },
      { id: 202, name: "Pepperoni Pizza", price: 399, description: "Classic pepperoni with cheese", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 203, name: "Garlic Bread", price: 149, description: "Crispy bread with garlic butter", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=300&h=200&fit=crop", category: "starter", veg: true },
      { id: 204, name: "Pasta Alfredo", price: 279, description: "Creamy white sauce pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop", category: "main", veg: true }
    ]
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "chinese",
    rating: 4.4,
    deliveryTime: "35-50 mins",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop",
    description: "Authentic Chinese dishes and dim sum",
    featured: false,
    menuItems: [
      { id: 301, name: "Hakka Noodles", price: 199, description: "Stir-fried noodles with vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop", category: "main", veg: true },
      { id: 302, name: "Chicken Manchurian", price: 279, description: "Spicy chicken in tangy sauce", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 303, name: "Spring Rolls", price: 149, description: "Crispy vegetable spring rolls", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop", category: "starter", veg: true },
      { id: 304, name: "Fried Rice", price: 219, description: "Wok-tossed rice with vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", category: "main", veg: true }
    ]
  },
  {
    id: 4,
    name: "Burger Junction",
    cuisine: "fast-food",
    rating: 4.2,
    deliveryTime: "20-30 mins",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    description: "Juicy burgers and quick bites",
    featured: true,
    menuItems: [
      { id: 401, name: "Classic Beef Burger", price: 249, description: "Juicy beef patty with lettuce and tomato", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 402, name: "Veg Burger", price: 199, description: "Crispy vegetable patty with sauce", image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=300&h=200&fit=crop", category: "main", veg: true },
      { id: 403, name: "French Fries", price: 99, description: "Golden crispy potato fries", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300&h=200&fit=crop", category: "side", veg: true },
      { id: 404, name: "Chicken Wings", price: 299, description: "Spicy buffalo chicken wings", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop", category: "starter", veg: false }
    ]
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "fast-food",
    rating: 4.1,
    deliveryTime: "25-40 mins",
    image: "https://images.unsplash.com/photo-1565299585323-38174c26ca0d?w=400&h=300&fit=crop",
    description: "Mexican street food and tacos",
    featured: false,
    menuItems: [
      { id: 501, name: "Chicken Tacos", price: 199, description: "Soft tacos with grilled chicken", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop", category: "main", veg: false },
      { id: 502, name: "Veggie Burrito", price: 179, description: "Wrapped tortilla with vegetables", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", category: "main", veg: true },
      { id: 503, name: "Nachos", price: 149, description: "Tortilla chips with cheese dip", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop", category: "starter", veg: true },
      { id: 504, name: "Quesadilla", price: 229, description: "Grilled tortilla with cheese", image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop", category: "main", veg: true }
    ]
  }
];
