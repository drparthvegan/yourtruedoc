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

/* ---------- MONO FRUIT MEALS (Recipes page) ----------
   One kind of fruit per meal, eaten whole and raw.
   category: "Sweet" | "Sub-acid" | "Acid" | "Melons"
   color: background colour of the card picture
*/
const RECIPES = [
  {
    title: "Banana Mono Meal",
    category: "Sweet",
    emoji: "🍌",
    color: "#fff4cc",
    time: "No prep",
    serves: "1",
    summary: "The easiest, most filling mono meal. Ripe bananas, eaten whole until satisfied.",
    ingredients: ["6–10 fully ripe bananas (yellow with brown spots)"],
    steps: ["Choose bananas with brown spots; they are fully ripe and easy to digest.", "Peel and eat whole, slowly, one at a time.", "Stop when you feel comfortably satisfied."],
    tip: "Green-tipped bananas are not ripe yet. Let them ripen at room temperature for a few days."
  },
  {
    title: "Mango Mono Meal",
    category: "Sweet",
    emoji: "🥭",
    color: "#fdf0dc",
    time: "No prep",
    serves: "1",
    summary: "Summer's king of fruits. Soft, fragrant mangoes eaten on their own.",
    ingredients: ["3–5 ripe mangoes (Alphonso, Kesar, Langra or Dasheri)"],
    steps: ["Soak mangoes in water for 30 minutes before eating.", "Gently squeeze each mango until soft, then suck the pulp directly from the fruit.", "Eat until satisfied."],
    tip: "Eating mango whole, without cutting, keeps it fresh and juicy till the last bite."
  },
  {
    title: "Strawberry Mono Meal",
    category: "Sub-acid",
    emoji: "🍓",
    color: "#fde0e3",
    time: "5 min",
    serves: "1",
    summary: "A winter treat. Fresh, fragrant strawberries eaten whole.",
    ingredients: ["400–600 g fresh, ripe strawberries"],
    steps: ["Soak in water for 10 minutes, then rinse well under running water.", "Eat whole, holding the green top and biting around it.", "Eat until satisfied."],
    tip: "Indian strawberries (Mahabaleshwar, Himachal) are in season from December to March."
  },
  {
    title: "Papaya Mono Meal",
    category: "Sweet",
    emoji: "🧡",
    color: "#ffe1cf",
    time: "2 min",
    serves: "1",
    summary: "Gentle on the stomach and available all year. Ideal for beginners.",
    ingredients: ["1 medium ripe papaya (about 1 kg)"],
    steps: ["Choose a papaya that is mostly yellow-orange and slightly soft.", "Halve it, scoop out the seeds, and eat the flesh with a spoon.", "Eat until satisfied."],
    tip: "Papaya is the one fruit here you need to open, but eat it as soon as it is cut."
  },
  {
    title: "Grapes Mono Meal",
    category: "Sub-acid",
    emoji: "🍇",
    color: "#ece3f5",
    time: "2 min",
    serves: "1",
    summary: "Juicy, hydrating and light. Wash well and eat by the bunch.",
    ingredients: ["500 g – 1 kg grapes (black or green, seeded if available)"],
    steps: ["Soak grapes in water with a little salt or vinegar for 15 minutes, then rinse well.", "Eat straight from the bunch, chewing well.", "Eat until satisfied."],
    tip: "Seeded grapes are closer to nature. Chew the seeds or spit them out, as you like."
  },
  {
    title: "Apple Mono Meal",
    category: "Sub-acid",
    emoji: "🍎",
    color: "#fde4e7",
    time: "No prep",
    serves: "1",
    summary: "Crunchy, satisfying and easy to carry anywhere.",
    ingredients: ["3–5 crisp, ripe apples"],
    steps: ["Wash apples well under running water.", "Eat whole with the skin, biting and chewing slowly.", "Eat until satisfied."],
    tip: "Choose local, in-season apples (Himachal, Kashmir) for the best taste."
  },
  {
    title: "Orange Mono Meal",
    category: "Acid",
    emoji: "🍊",
    color: "#ffe8cc",
    time: "No prep",
    serves: "1",
    summary: "Winter's juicy refresher. Peel and eat whole segments, never juiced.",
    ingredients: ["5–8 sweet oranges, kinnow or mosambi"],
    steps: ["Peel with your hands.", "Eat segment by segment, including the white pith and fibre.", "Eat until satisfied."],
    tip: "Eating the whole fruit instead of juice keeps all its fibre and nutrients."
  },
  {
    title: "Pomegranate Mono Meal",
    category: "Sub-acid",
    emoji: "❤️",
    color: "#fbdada",
    time: "5 min",
    serves: "1",
    summary: "A slow, mindful meal. Break open and eat the jewel-like arils.",
    ingredients: ["2–3 ripe pomegranates"],
    steps: ["Score the skin lightly and break the fruit open with your hands.", "Eat the arils directly from the fruit.", "Eat until satisfied."],
    tip: "The slow pace of eating pomegranate naturally prevents overeating."
  },
  {
    title: "Watermelon Mono Meal",
    category: "Melons",
    emoji: "🍉",
    color: "#e6f2e4",
    time: "2 min",
    serves: "1",
    summary: "Melons digest fastest. Eat them alone, on an empty stomach.",
    ingredients: ["1/4 to 1/2 ripe watermelon"],
    steps: ["Cut into large slices just before eating.", "Eat the red flesh directly from the slice.", "Wait at least 30–45 minutes before your next meal."],
    tip: "'Eat melons alone or leave them alone' — a classic natural hygiene rule."
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
      "Try a mono fruit day",
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
