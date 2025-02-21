// Set your home's latitude and longitude
const homeLocation = [1.388568, 103.843720];  // NCS Hub Block C coordinates

// Initialize the map and set your home as the center
const map = L.map('map', {
  center: homeLocation,
  zoom: 14,  // Adjust zoom level
  dragging: true,
  zoomControl: true,
  scrollWheelZoom: true,
});

const homeIcon = L.icon({
  iconUrl: './assets/img_marker_ncs.png', // Replace with your home icon
  iconSize: [32, 32],
});

const restaurantIcon = L.icon({
  iconUrl: './assets/img_marker_restaurant.png', // Replace with your home icon
  iconSize: [32, 32],
});

// Add OpenStreetMap tile layer (Basic map without unnecessary elements)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker for your home
L.marker(homeLocation, { icon: homeIcon })
  .addTo(map)
  .bindPopup("<b>NCS Hub</b>");

// Define an array of restaurant locations with full details
const restaurants = [
  {
    name: "Indian Banana Leaf Restaurant",
    lat: 1.391865,
    lng: 103.850613,
    info: "My top pick for a satisfying vegetarian meal near NCS Hub!",
    address: "7 Ang Mo Kio Street 66, #01-15, Singapore 567706",
    hours: "9:00 AM – 10:30 PM",
    rating: "⭐⭐⭐⭐ (4.0/5)",
    price: "$6 – $15",
    vegetarian: "Rice, Daal, Chapati, Puri, Biryani, Samosa, Vada, Subji, Curries",
    vegan: "✅ Yes",
    menu: "Set meals during lunch, à la carte options available",
    transport: "🚶 10–15 min walk | 🚌 Bus (2 stops) | 🚗 Car/Grab (7 min)",
    travel_time: "~15 minutes",
    ambience: "Casual sit-down restaurant",
    waiting_time: "5–8 minutes during peak hours",
    payment: "Cash, Cards, PayNow",
    halal: "✅ Yes",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Offers non-veg options, great for mixed dining preferences.",
    image: "https://lh5.googleusercontent.com/p/AF1QipMU3CVcP8tcEWWMhiRf9hlpKJXdBsoQPcjisl81=w408-h306-k-no"
  },
  {
    name: "Rathana Bhavan Indian Pure Vegetarian Restaurant",
    lat: 1.4295484580092985,
    lng: 103.83593749563478,
    info: "A hidden gem for pure vegetarian delights in Northpoint City!",
    address: "Northpoint City - North Wing - B2 Kopitiam, Singapore 769098",
    hours: "7:00 AM – 9:45 PM",
    rating: "⭐⭐⭐⭐ (4.5/5)",
    price: "$5 – $15",
    vegetarian: "Biryani, Rice, Puri, Chapati, Naan, Samosa, Vadai, Mock Mutton, Mock Chicken, Tikka, Kebab, Paratha, Soup, Chai",
    vegan: "✅ Yes",
    menu: "Extensive vegetarian-only menu",
    transport: "🚌 Bus 854/857 (2 stops) | 🚗 Car/Grab (14 min)",
    travel_time: "~20 minutes",
    ambience: "Food court setting (Kopitiam)",
    waiting_time: "5–10 min queue + 5–10 min prep",
    payment: "Cash, Cards, PayNow, FairPrice app",
    halal: "✅ Yes",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Mock Mutton/Chicken Biryani sells out fast—go early!",
    image: "https://lh3.googleusercontent.com/p/AF1QipPUr3M1MLsRt8vk6vx3I-RqDt5esfAGvPRAaogP=s680-w680-h510"
  },
  {
    name: "Komala’s Restaurant",
    lat: 1.4299135,
    lng: 103.8362697,
    info: "A clean, quick, and budget-friendly vegetarian spot near Northpoint City!",
    address: "Outside Northpoint, below Golden Village, 51 Yishun Central 1, #01 – 05/06, Singapore 768794",
    hours: "8:00 AM – 10:00 PM",
    rating: "⭐⭐⭐⭐ (4.0/5)",
    price: "$3 – $12",
    vegetarian: "Dosai, Vadai, Biryani, Rice, Puri, Chapati, Samosa, Chai, Buttermilk",
    vegan: "✅ Yes",
    menu: "100% Vegetarian, specializing in South Indian cuisine",
    transport: "🚌 Bus 854/857 (2 stops) | 🚗 Car/Grab (15 min) | 🚌 NCS Lunch Shuttle (Wed only)",
    travel_time: "~20 minutes",
    ambience: "Casual restaurant",
    waiting_time: "2–5 min queue + 5–10 min serving",
    payment: "Cash, Cards, PayNow",
    halal: "❌ No (but all-vegetarian menu)",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Exit Northpoint City and walk towards Golden Village—Komala’s is located outside, facing Yishun Central Road.",
    image: "https://lh3.googleusercontent.com/p/AF1QipPlAB8w6LQJv9WUnFiCjbXkenRalk_eFFYcwSog=s680-w680-h510"
  },
  {
    name: "Sakunthala’s Restaurant",
    lat: 1.426473,
    lng: 103.8363077,
    info: "A great spot for both South & North Indian vegetarian and non-vegetarian delights near Northpoint City!",
    address: "Outside Northpoint, 3 North Point Dr, #01-01 Yishun Town Square, Singapore 768020",
    hours: "10:30 AM – 10:30 PM",
    rating: "⭐⭐⭐⭐ (4.5/5)",
    price: "$10 – $20",
    vegetarian: "Prata, Naan, Dosai, Vadai, Biryani, Rice, Puri, Chapati, Samosa, Chai, Buttermilk",
    vegan: "✅ Yes",
    menu: "South & North Indian cuisine, offering both vegetarian and non-vegetarian options",
    transport: "🚌 Bus 854/857 (2 stops) | 🚗 Car/Grab (15 min) | 🚌 NCS Lunch Shuttle (Wed only)",
    travel_time: "~20 minutes",
    ambience: "Casual restaurant",
    waiting_time: "8–15 minutes serving time",
    payment: "Cash, Cards, PayNow",
    halal: "✅ Yes",
    accessibility: "♿ Wheelchair-friendly, kid-friendly menu available",
    notes: "Exit Northpoint City bus terminal from the last gate, then walk towards Yishun Garden (~2 minutes). Recommended Dishes: Try the Crispy Bhindi Fry, Veg Kothu Prata, and Samosa for a flavorful meal! 🍽️",
    image: "https://lh3.googleusercontent.com/p/AF1QipN6LYF4p7mPn4HlFH4ZpSAuwt9hxl2x3gq_fcZq=s1360-w1360-h1020"
  },
  {
    name: "Greendot - Northpoint",
    lat: 1.429206880433387,
    lng: 103.83616374287432,
    info: "A modern and healthy vegetarian dining spot in Northpoint City!",
    address: "930 Yishun Avenue 2, #B2-09/11, Northpoint City North Wing, Singapore 769098",
    hours: "10:30 AM – 9:30 PM",
    rating: "⭐⭐⭐⭐ (4.3/5)",
    price: "$8 – $18",
    vegetarian: "Bento sets, Laksa, Herbal Soup, Mushroom Hotpot, Noodles, Rice Bowls, Salad Bowls",
    vegan: "✅ Yes",
    menu: "Asian fusion vegetarian cuisine, focusing on plant-based and healthy meals",
    transport: "🚌 Bus 854/857 (2 stops) | 🚗 Car/Grab (15 min) | 🚌 NCS Lunch Shuttle (Wed only)",
    travel_time: "~20 minutes",
    ambience: "Modern casual dining",
    waiting_time: "5–10 minutes queue, food served within 10 minutes",
    payment: "Cash, Cards, PayNow, NETS",
    halal: "❌ No (but all-vegetarian menu)",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Located at Basement 2 (B2) North Wing of Northpoint City—easily accessible after entering the mall. Recommended Dishes: Try the Laksa, Mushroom Hotpot, or Bento Sets for a nutritious and fulfilling meal! 🍜🍚",
    image: "https://lh3.googleusercontent.com/p/AF1QipP4SN8wTHilvZh8NqQ2C9CMaZgEBSt4on0bn6c1=s1360-w1360-h1020"
  },
  {
    name: "Nandhana’s Ang Mo Kio (Djitsun Mall)",
    lat: 1.3730764656261194,
    lng: 103.84736912499866,
    info: "Authentic South and North Indian flavors in the heart of Ang Mo Kio!",
    address: "Djitsun Mall, Ang Mo Kio",
    hours: "10:00 AM – 10:00 PM",
    rating: "⭐⭐⭐⭐ (4.2/5)",
    price: "$8 – $20",
    vegetarian: "South Indian Thali, North Indian Thali, Palan Paneer, Mushroom subji, Naan, Dosai, Biryani, Manchurian",
    vegan: "✅ Yes",
    menu: "Authentic South Indian vegetarian and non-vegetarian options",
    transport: "🚌 Bus 86 (5 stops) → Walk ~7 min | 🚗 Car/Grab (12 min) | 🚌 NCS Lunch Shuttle (Mon & Thu)",
    travel_time: "~20 minutes",
    ambience: "Casual restaurant",
    waiting_time: "5–10 min queue | 10–15 min serving time",
    payment: "Cash, Cards, PayNow",
    halal: "❌ No",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Located inside Djitsun Mall with ample seating. Perfect place for team lunch/dinner, plenty of vegetarian and non-vegetarian options.",
    image: "https://lh3.googleusercontent.com/p/AF1QipOsWqy94csURJEWC3j6nfba1HdiqfnoFTqNqOYU=s1360-w1360-h1020"
  },
  {
    name: "Thohirah Restaurant (Cafeela Roti Prata)",
    lat: 1.3980970550751033,
    lng: 103.87322863821596,
    info: "A 24-hour Indian Muslim restaurant—great for team lunches!",
    address: "258 Jln Kayu, Singapore 799487",
    hours: "🕛 24 HOURS",
    rating: "⭐⭐⭐⭐ (4.3/5)",
    price: "$4 – $15",
    vegetarian: "Roti Prata, Dosai, Mee Goreng, Nasi Goreng, Maggie Goreng, Roti John, Chapati, Vegetarian Biryani",
    vegan: "✅ Yes",
    menu: "Indian Muslim cuisine with plenty of vegetarian and non-vegetarian options",
    transport: "🚌 Bus 86 from 'Opp NCS Hub' (11 stops) | 🚗 Car/Grab (~10 min)",
    travel_time: "~20–25 minutes",
    ambience: "Outdoor seating + Indoor air-conditioned seating",
    waiting_time: "5–10 min queue, food served within 10–15 min",
    payment: "Cash, Cards, PayNow",
    halal: "✅ Pure Halal",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Great for team lunches! Spacious seating, making it a good option for group gatherings. Plenty of drinks available—from traditional Teh Tarik to fresh juices. Recommended Veg Dishes: Roti Prata, Vegetarian Biryani, Mee Goreng.",
    image: "https://static.mothership.sg/1/2025/01/cafeela-jalan-kayu-suspended.jpg"
  },
  {
    name: "Casuarina Curry (Thomson)",
    lat: 1.377150666071667,
    lng: 103.82800295883014,
    info: "A famous Indian Muslim restaurant near MacRitchie—perfect for breakfast, lunch, or a weekend treat!",
    address: "136-138 Casuarina Rd, Singapore 579526",
    hours: "7:00 AM – 11:00 PM",
    rating: "⭐⭐⭐⭐ (4.0/5)",
    price: "$5 – $18",
    vegetarian: "Prata, Naan, Veg Biryani Set Meal, Paneer Butter Masala, Mee Goreng, Nasi Goreng, Ghee Masala Dosai",
    vegan: "✅ Yes",
    menu: "South Indian & Indian-Muslim cuisine with both vegetarian and non-vegetarian options",
    transport: "🚌 Bus 163 from 'NCS Hub' (12 stops) | 🚗 Car/Grab (~12 min)",
    travel_time: "~20–25 minutes",
    ambience: "Outdoor seating + Indoor air-conditioned seating",
    waiting_time: "5–10 min queue, food served within 10–15 min",
    payment: "Cash, Cards, PayNow",
    halal: "✅ Yes (Indian-Muslim restaurant)",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Very popular spot due to its proximity to MacRitchie Reservoir, making it a great choice for breakfast and lunch, especially on weekends. Recommended Dishes: Ghee Masala Dosai, Veg Biryani Set Meal, Paneer Butter Masala, and Ice Lemon Tea 🍽️ Great for groups! Offers a variety of dishes catering to both vegetarians and non-vegetarians.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNBGNtqO1JqY9PKVCPWZvyAAswTK6TzEGwWmiy3=s1360-w1360-h1020"
  },
  {
    name: "B6 Canteen (NCS Hub, Level 6)",
    lat: 1.3882651409496025,
    lng: 103.84381648271004,
    info: "A convenient but limited vegetarian option inside NCS Hub",
    address: "NCS Hub, Block B, Level 6",
    hours: "11:00 AM – 2:00 PM",
    rating: "⭐⭐ (1.5/5)",
    price: "$4 – $7",
    vegetarian: "Very few (usually 1 or 2 veg dishes)",
    vegan: "⚠️ Some days yes, but inconsistent",
    menu: "One Halal Muslim food stall with a single vegetarian dish available most days",
    transport: "✅ No need to travel—located inside the office!",
    travel_time: "Instant (Inside NCS Hub)",
    ambience: "Office canteen, but seating is an issue during peak hours",
    waiting_time: "Short queues but may struggle to find clean tables",
    payment: "Cash, PayNow, Dash",
    halal: "✅ Yes",
    accessibility: "♿ Wheelchair-friendly",
    notes: "Pros: Most convenient option since it's inside the office—no worries about rain, sun, or travel. Cons: Taste is average, limited vegetarian choices, and seating is difficult during peak hours. Past Issues: There was an incident where shrimp paste was mistakenly added to a vegetarian dish, but this was corrected after complaints. Service and behavior have improved since then. Recommended Strategy: Go early to get a seat and check the food properly before ordering!",
    image: "https://fastly.4sqi.net/img/general/width960/477690_7OpwtbZlKTBrUhsPjzpJuult9UbIQkVweS8FkNJcu_g.jpg"
  }
];

// Add markers for each restaurant with detailed popups
restaurants.forEach(restaurant => {
  L.marker([restaurant.lat, restaurant.lng], { icon: restaurantIcon })
    .addTo(map)
    .bindPopup(generatePopupContent(restaurant));
});