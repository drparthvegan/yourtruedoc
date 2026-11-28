/* =========================================================
   YOUR TRUE DOC — EDIT YOUR CONTENT HERE
   Add recipes, topics and videos by copying an entry and
   changing the text. No coding knowledge needed.
   ========================================================= */

const SITE = {
  name: "Eat Fruits & Heal",
  doctor: "Dr. Sunaina",
  degree: "MBBS",
  tagline: "Natural Hygiene · Raw Vegan · Fruit-Based Living",
  email: "hello@doctorbuddha.com",          // TODO: replace with your email
  whatsapp: "919999999999",                 // TODO: country code + number, no "+"
  phoneDisplay: "+91 99999 99999",          // TODO
  location: "India · Online consultations worldwide",
  youtube: "https://youtube.com/",          // TODO: your channel link
  instagram: "https://instagram.com/",      // TODO
  facebook: "https://facebook.com/",        // TODO
  registrationNo: "",                       // TODO: medical council registration no. (shown on Book page & footer)

  /* ---------- CONSULTATION & PAYMENT ---------- */
  consultFee: 500,                          // ₹ per consultation
  consultMinutes: 10,                       // minutes per consultation
  // Paste ONE of these from your Razorpay dashboard:
  razorpayButtonId: "pl_U4MvIoOenZeN4B",                   // Payment Button ID, looks like "pl_XXXXXXXXXXXX"
  razorpayLink: ""                          // OR a Payment Page / Payment Link URL, e.g. "https://rzp.io/rzp/xxxx"
};

/* ---------- RECIPES ----------
   category: "Smoothies" | "Salads" | "Mono Meals" | "Desserts" | "Juices" | "Breakfast"
   color: background colour of the card picture
*/
const RECIPES = [
  {
    title: "Mango Banana Morning Smoothie",
    category: "Smoothies",
    emoji: "🥭",
    color: "#fdf0dc",
    time: "5 min",
    serves: "1",
    summary: "A creamy, naturally sweet start to the day — just two sweet fruits and water.",
    ingredients: ["2 ripe mangoes, peeled", "2 ripe bananas", "1 cup water or coconut water"],
    steps: ["Peel and chop the fruits.", "Blend with water until smooth.", "Drink slowly, preferably on an empty stomach."],
    tip: "Sweet fruits combine well together. Avoid adding acid fruits like orange to this blend."
  },
  {
    title: "Watermelon Mono Meal",
    category: "Mono Meals",
    emoji: "🍉",
    color: "#fde4e7",
    time: "2 min",
    serves: "1",
    summary: "Melons digest fastest — eat them alone, and eat until satisfied.",
    ingredients: ["1/4 to 1/2 ripe watermelon"],
    steps: ["Cut into slices or cubes.", "Eat on an empty stomach, alone.", "Wait at least 30–45 minutes before the next meal."],
    tip: "'Eat melons alone or leave them alone' — a classic natural hygiene rule."
  },
  {
    title: "Green Leafy Tomato Salad",
    category: "Salads",
    emoji: "🥗",
    color: "#e6f2e4",
    time: "10 min",
    serves: "2",
    summary: "Fresh, hydrating and full of minerals. Simple dressing, no oil needed.",
    ingredients: ["2 cups lettuce or spinach", "2 tomatoes, diced", "1 cucumber, sliced", "Juice of 1/2 lemon", "Fresh coriander & mint"],
    steps: ["Wash and chop the greens.", "Add tomato, cucumber and herbs.", "Squeeze lemon over and toss."],
    tip: "Tomatoes and cucumbers pair well with leafy greens. Keep the salad simple for easy digestion."
  },
  {
    title: "Date & Banana Raw Ice Cream",
    category: "Desserts",
    emoji: "🍨",
    color: "#f3e8dc",
    time: "10 min + freeze",
    serves: "2",
    summary: "A guilt-free dessert made from frozen ripe bananas — no sugar, no dairy.",
    ingredients: ["4 ripe bananas, sliced and frozen", "4–5 soft dates, pitted", "Splash of water"],
    steps: ["Freeze banana slices overnight.", "Blend frozen banana with dates and a splash of water.", "Serve immediately as soft-serve."],
    tip: "Use well-spotted bananas for the best natural sweetness."
  },
  {
    title: "Fresh Orange Juice",
    category: "Juices",
    emoji: "🍊",
    color: "#ffe8cc",
    time: "5 min",
    serves: "1",
    summary: "Seasonal, juicy and refreshing. Drink fresh — never stored.",
    ingredients: ["4–5 sweet oranges or mosambi"],
    steps: ["Cut and juice the oranges.", "Drink immediately on an empty stomach."],
    tip: "Acid fruits combine well with other acid and sub-acid fruits, not with sweet dried fruits."
  },
  {
    title: "Papaya & Pomegranate Bowl",
    category: "Breakfast",
    emoji: "🍈",
    color: "#ffe1cf",
    time: "5 min",
    serves: "1",
    summary: "A gentle, gut-friendly breakfast bowl full of colour.",
    ingredients: ["2 cups ripe papaya, cubed", "1/2 cup pomegranate seeds", "Few mint leaves"],
    steps: ["Cube the papaya.", "Top with pomegranate and mint.", "Eat fresh."],
    tip: "Papaya is easy on digestion and great for beginners transitioning to fruits."
  }
];

/* ---------- HEALTH TOPICS (Learn page) ---------- */
const TOPICS = [
  {
    id: "natural-food",
    icon: "🍎",
    title: "Natural Food",
    summary: "Our bodies thrive on fresh, ripe, uncooked plant foods — especially fruits and tender greens — eaten in their natural state.",
    points: [
      "Fresh ripe fruits as the foundation of the diet",
      "Tender leafy greens and non-starchy vegetables",
      "Small amounts of nuts and seeds",
      "Avoid processed, refined and heavily cooked foods",
      "Eat seasonal and local produce whenever possible"
    ]
  },
  {
    id: "food-combining",
    icon: "🔀",
    title: "Food Combining",
    summary: "Different foods digest at different speeds and need different conditions. Simple, compatible meals mean lighter digestion and more energy.",
    points: [
      "Eat melons alone",
      "Sweet fruits combine best with other sweet fruits",
      "Acid fruits combine with sub-acid fruits",
      "Greens combine well with almost everything",
      "Keep meals simple — fewer ingredients, better digestion"
    ]
  },
  {
    id: "natural-movement",
    icon: "🧘‍♀️",
    title: "Natural Movement",
    summary: "The body is designed to move. Daily natural movement improves circulation, lymph flow, strength and mood.",
    points: [
      "Walk barefoot on grass or earth",
      "Stretching and yoga for flexibility",
      "Squatting, hanging, climbing — functional movement",
      "Play, dance and enjoy outdoor activity",
      "Move every hour if you sit for long"
    ]
  },
  {
    id: "rest-sleep",
    icon: "🌙",
    title: "Rest & Sleep",
    summary: "Healing happens during rest. Deep sleep in harmony with the sun's rhythm is one of the most powerful health tools.",
    points: [
      "Sleep early — ideally before 10 pm",
      "Dark, quiet, well-ventilated room",
      "Avoid screens one hour before bed",
      "Physical, sensory and emotional rest are all important"
    ]
  },
  {
    id: "sunlight-air",
    icon: "☀️",
    title: "Sunlight & Fresh Air",
    summary: "Gentle sun exposure and clean air are basic needs of life, just like food and water.",
    points: [
      "Morning sunlight for 15–30 minutes",
      "Deep breathing in fresh, open air",
      "Sleep with windows open where possible",
      "Spend time in nature every week"
    ]
  },
  {
    id: "water-hydration",
    icon: "💧",
    title: "Water & Hydration",
    summary: "Water-rich fruits and vegetables hydrate the body naturally. Drink clean water according to thirst.",
    points: [
      "Fruits are 80–95% structured water",
      "Drink clean water when thirsty",
      "Avoid drinking large amounts with meals",
      "Reduce salt and spices that create artificial thirst"
    ]
  },
  {
    id: "fasting",
    icon: "🕊️",
    title: "Fasting & Physiological Rest",
    summary: "Giving the digestive system rest allows the body to direct energy towards cleansing and repair.",
    points: [
      "Begin with longer gaps between meals",
      "Try a light fruit or juice day",
      "Longer fasts only under qualified supervision",
      "Break fasts gently with juicy fruits"
    ]
  },
  {
    id: "emotional-poise",
    icon: "💚",
    title: "Emotional Poise",
    summary: "A calm, positive mind supports a healthy body. Stress drains nerve energy and slows healing.",
    points: [
      "Practice gratitude and mindful eating",
      "Healthy relationships and community",
      "Meditation and quiet time daily",
      "Purpose and joy in everyday life"
    ]
  }
];

/* ---------- FOOD COMBINING CHART ---------- */
const COMBINING = [
  ["Sweet fruits (banana, mango, dates, chiku)", "Sweet & sub-acid fruits, lettuce, celery", "Acid fruits, starches, proteins"],
  ["Acid fruits (orange, pineapple, lemon)", "Acid & sub-acid fruits, nuts (small)", "Sweet dried fruits, starches"],
  ["Sub-acid fruits (apple, grapes, papaya)", "Sweet or acid fruits, leafy greens", "Starches, heavy proteins"],
  ["Melons (watermelon, muskmelon)", "Eat alone", "Everything else"],
  ["Leafy greens & non-starchy veg", "Almost all foods", "—"],
  ["Nuts & seeds", "Leafy greens, acid fruits", "Starches, sweet fruits in excess"]
];

/* ---------- VIDEO LECTURES ----------
   youtubeId: the part after "v=" in a YouTube link.
   Example: https://www.youtube.com/watch?v=ABC123xyz  ->  youtubeId: "ABC123xyz"
   Leave youtubeId empty ("") to show a "Coming soon" card.
*/
const VIDEOS = [
  { title: "What is Natural Hygiene?", category: "Basics", youtubeId: "", duration: "", description: "An introduction to the principles of natural hygiene and how the body heals itself." },
  { title: "Food Combining Made Simple", category: "Diet", youtubeId: "", duration: "", description: "Learn which foods go together for easy digestion and more energy." },
  { title: "Transitioning to a Fruit-Based Diet", category: "Diet", youtubeId: "", duration: "", description: "Practical, step-by-step guidance for a safe and enjoyable transition." },
  { title: "Natural Movement for Everyday Life", category: "Lifestyle", youtubeId: "", duration: "", description: "Simple movement habits you can add to your daily routine." },
  { title: "The Power of Rest & Sleep", category: "Lifestyle", youtubeId: "", duration: "", description: "Why rest is the foundation of healing and how to sleep better." },
  { title: "Raw Vegan Kitchen Basics", category: "Recipes", youtubeId: "", duration: "", description: "Tools, shopping lists and quick recipes for a raw vegan kitchen." }
];

/* ---------- CORE PRINCIPLES (image cards) ----------
   Add a new one: put the picture in assets/ and copy an entry. */
const PRINCIPLES = [
  { image: "assets/principle-toxemia.jpg", title: "Remove the cause", text: "Toxemia is the root cause of diseases, hence removing the cause serves in best interest of the health of the patient." },
  { image: "assets/principle-frugivores.jpg", title: "Our natural design", text: "Human beings are frugivores by their natural design. Deviation from this original nature is the primary cause of all sufferings." },
  { image: "assets/principle-raw-whole-food.jpg", title: "Whole & raw", text: "Processing of any kind, from cooking to cutting, chopping, mixing, juicing, blending, destroys the vital nutrients which were present originally in the food. Consuming the food whole or in raw state preserves the nutrients and hence maintains the health of the body." },
  { image: "assets/principle-lifestyle.jpg", title: "Beyond food", text: "Daily movement, sunlight, fresh air, clean water and emotional hygiene are supplementary to natural food to build and maintain health." }
];
