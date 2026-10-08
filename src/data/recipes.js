const recipes = [
  // =====================================================
  // INDIAN RECIPES
  // =====================================================

  // Indian Breakfast

  {
    id: 1,
    name: "Aloo Paratha",
    image: "/images/indian/breakfast/Aloo Paratha.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "30 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Wheat flour",
      "Potatoes",
      "Green chilies",
      "Coriander leaves",
      "Red chili powder",
      "Garam masala",
      "Salt",
      "Oil"
    ],

    instructions: [
      "Prepare a soft dough using wheat flour, water, and salt.",
      "Boil and mash the potatoes.",
      "Mix the potatoes with green chilies, coriander, and spices.",
      "Stuff the potato mixture into portions of dough.",
      "Roll each portion into a flat paratha.",
      "Cook on a hot pan with oil until golden brown on both sides.",
      "Serve hot with curd or pickle."
    ],

    funFact:
      "Aloo paratha is a popular North Indian stuffed flatbread made with spiced potato filling."
  },

  {
    id: 2,
    name: "Chole Bhature",
    image: "/images/indian/breakfast/Chole Bhature.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "45 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Chole masala",
      "Red chili powder",
      "Wheat flour",
      "Yogurt",
      "Oil",
      "Salt"
    ],

    instructions: [
      "Soak chickpeas overnight and cook them until tender.",
      "Prepare a masala using onion, tomatoes, ginger, and garlic.",
      "Add spices and cooked chickpeas to the masala.",
      "Simmer the chole until the gravy thickens.",
      "Prepare a soft dough using flour, yogurt, water, and salt.",
      "Roll the dough into discs and deep fry until puffed.",
      "Serve the bhature with hot chole."
    ],

    funFact:
      "Chole bhature is especially popular in North India and is commonly enjoyed as a hearty meal."
  },

  {
    id: 3,
    name: "Idli & Sambar",
    image: "/images/indian/breakfast/Idli & Sambar.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "35 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Idli rice",
      "Urad dal",
      "Toor dal",
      "Mixed vegetables",
      "Tamarind",
      "Sambar powder",
      "Mustard seeds",
      "Curry leaves",
      "Salt"
    ],

    instructions: [
      "Soak rice and urad dal separately.",
      "Grind them into a smooth batter and allow it to ferment.",
      "Pour the fermented batter into idli molds.",
      "Steam the idlis until soft and cooked.",
      "Cook toor dal and vegetables for the sambar.",
      "Add tamarind and sambar powder.",
      "Prepare a tempering with mustard seeds and curry leaves.",
      "Serve hot idlis with sambar."
    ],

    funFact:
      "Idli is a steamed South Indian breakfast that is naturally soft and low in oil."
  },

  {
    id: 4,
    name: "Masala Dosa",
    image: "/images/indian/breakfast/Masala Dosa.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "40 mins",
    difficulty: "Medium",
    rating: 4.9,

    ingredients: [
      "Dosa rice",
      "Urad dal",
      "Potatoes",
      "Onion",
      "Green chilies",
      "Mustard seeds",
      "Curry leaves",
      "Turmeric",
      "Salt",
      "Oil"
    ],

    instructions: [
      "Soak rice and urad dal and grind them into a smooth batter.",
      "Allow the batter to ferment.",
      "Boil and mash the potatoes.",
      "Prepare the potato filling with onion, chilies, mustard seeds, and spices.",
      "Spread dosa batter thinly on a hot pan.",
      "Cook until crisp.",
      "Place the potato filling inside and fold the dosa.",
      "Serve with chutney and sambar."
    ],

    funFact:
      "Masala dosa is one of the most internationally recognized South Indian dishes."
  },

  {
    id: 5,
    name: "Pesarattu",
    image: "/images/indian/breakfast/Pesarattu.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "25 mins",
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "Green gram",
      "Green chilies",
      "Ginger",
      "Cumin seeds",
      "Onion",
      "Coriander leaves",
      "Salt",
      "Oil"
    ],

    instructions: [
      "Soak green gram for several hours.",
      "Grind it with ginger, chilies, cumin, and salt.",
      "Heat a flat pan.",
      "Spread the batter into a thin circular dosa.",
      "Sprinkle chopped onion and coriander on top.",
      "Cook with a little oil until crisp.",
      "Serve hot."
    ],

    funFact:
      "Pesarattu is a traditional Andhra and Telangana-style dosa made primarily from green gram."
  },

  {
    id: 6,
    name: "Poori Chole",
    image: "/images/indian/breakfast/Poori Chole.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "40 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Wheat flour",
      "Chickpeas",
      "Onion",
      "Tomatoes",
      "Green chilies",
      "Chole masala",
      "Red chili powder",
      "Oil",
      "Salt"
    ],

    instructions: [
      "Prepare a firm dough using wheat flour, water, and salt.",
      "Cook chickpeas until tender.",
      "Prepare a spiced onion and tomato gravy.",
      "Add chickpeas and simmer until the gravy thickens.",
      "Roll the dough into small discs.",
      "Deep fry the discs until they puff up.",
      "Serve hot pooris with chole."
    ],

    funFact:
      "Poori is a deep-fried Indian bread that puffs up because steam forms inside the dough while frying."
  },

  // Indian Lunch

  {
    id: 7,
    name: "Dal Tadka",
    image: "/images/indian/lunch/Dal Tadka.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "30 mins",
    difficulty: "Easy",
    rating: 4.7,

    ingredients: [
      "Toor dal",
      "Onion",
      "Tomato",
      "Garlic",
      "Green chili",
      "Turmeric",
      "Cumin seeds",
      "Red chili",
      "Coriander leaves",
      "Salt"
    ],

    instructions: [
      "Wash and cook the dal with turmeric until soft.",
      "Mash the cooked dal lightly.",
      "Prepare a tempering with oil, cumin, garlic, and red chili.",
      "Add onion and tomato and cook until soft.",
      "Pour the tempering into the cooked dal.",
      "Simmer briefly and garnish with coriander."
    ],

    funFact:
      "The word 'tadka' refers to tempering spices in hot oil or ghee to release their aroma."
  },

  {
    id: 8,
    name: "Lemon Rice",
    image: "/images/indian/lunch/Lemon Rice.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "20 mins",
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "Cooked rice",
      "Lemon juice",
      "Peanuts",
      "Green chilies",
      "Mustard seeds",
      "Urad dal",
      "Chana dal",
      "Curry leaves",
      "Turmeric",
      "Salt"
    ],

    instructions: [
      "Cook and cool the rice.",
      "Heat oil and prepare a tempering with mustard seeds and dals.",
      "Add peanuts, chilies, and curry leaves.",
      "Add turmeric and mix well.",
      "Add the cooked rice and combine gently.",
      "Turn off the heat and add fresh lemon juice.",
      "Mix and serve."
    ],

    funFact:
      "Lemon rice is especially popular in South India and is also commonly prepared for travel and lunch boxes."
  },

  {
    id: 9,
    name: "Rajma Chawal",
    image: "/images/indian/lunch/Rajma Chawal.png",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "50 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Kidney beans",
      "Rice",
      "Onion",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Garam masala",
      "Red chili powder",
      "Cumin",
      "Salt"
    ],

    instructions: [
      "Soak kidney beans overnight.",
      "Pressure cook the beans until tender.",
      "Prepare a gravy using onion, tomato, ginger, and garlic.",
      "Add the spices and cooked kidney beans.",
      "Simmer until the gravy becomes thick.",
      "Cook rice separately.",
      "Serve the rajma hot with rice."
    ],

    funFact:
      "Rajma chawal is a beloved North Indian comfort food combining kidney bean curry with rice."
  },

  {
    id: 10,
    name: "South Indian Meals",
    image: "/images/indian/lunch/South Indian Meals.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "60 mins",
    difficulty: "Hard",
    rating: 4.8,

    ingredients: [
      "Rice",
      "Toor dal",
      "Vegetables",
      "Tamarind",
      "Coconut",
      "Curd",
      "Spices",
      "Papad",
      "Pickle",
      "Salt"
    ],

    instructions: [
      "Cook rice until soft.",
      "Prepare dal and a vegetable-based sambar.",
      "Prepare one or more vegetable side dishes.",
      "Prepare rasam or another traditional accompaniment.",
      "Serve curd, pickle, papad, and other sides.",
      "Arrange the dishes together and serve as a traditional meal."
    ],

    funFact:
      "A traditional South Indian meal can include several different dishes served together, often with rice as the centerpiece."
  },

  // Indian Dinner

  {
    id: 11,
    name: "Andhra Chicken Curry",
    image: "/images/indian/dinner/Andhra Chicken Curry.jpg",
    cuisine: "Indian",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "50 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Chicken",
      "Onion",
      "Tomato",
      "Ginger garlic paste",
      "Green chilies",
      "Red chili powder",
      "Coriander powder",
      "Turmeric",
      "Curry leaves",
      "Salt"
    ],

    instructions: [
      "Marinate the chicken with turmeric, chili powder, and salt.",
      "Heat oil and sauté onions until golden.",
      "Add ginger garlic paste and green chilies.",
      "Add tomatoes and spices and cook until the oil separates.",
      "Add the chicken and mix well.",
      "Cover and cook until the chicken is tender.",
      "Garnish with curry leaves and coriander."
    ],

    funFact:
      "Andhra cuisine is known for its bold use of chilies and spices."
  },

  {
    id: 12,
    name: "Butter Chicken",
    image: "/images/indian/dinner/Butter Chicken.jpg",
    cuisine: "Indian",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "50 mins",
    difficulty: "Medium",
    rating: 4.9,

    ingredients: [
      "Chicken",
      "Yogurt",
      "Tomatoes",
      "Butter",
      "Cream",
      "Ginger garlic paste",
      "Garam masala",
      "Red chili powder",
      "Kasuri methi",
      "Salt"
    ],

    instructions: [
      "Marinate the chicken with yogurt and spices.",
      "Cook or grill the marinated chicken.",
      "Prepare a tomato-based gravy with butter and spices.",
      "Add the cooked chicken to the gravy.",
      "Add cream and kasuri methi.",
      "Simmer gently until the sauce becomes rich and creamy.",
      "Serve hot."
    ],

    funFact:
      "Butter chicken originated in Delhi and became famous for its creamy tomato-based sauce."
  },

  {
    id: 13,
    name: "Curd Rice",
    image: "/images/indian/dinner/Curd Rice.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "15 mins",
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "Cooked rice",
      "Curd",
      "Milk",
      "Green chilies",
      "Ginger",
      "Mustard seeds",
      "Urad dal",
      "Curry leaves",
      "Salt"
    ],

    instructions: [
      "Mash the cooked rice lightly.",
      "Allow it to cool.",
      "Mix the rice with curd and a little milk.",
      "Prepare a tempering with mustard seeds, urad dal, ginger, and curry leaves.",
      "Add the tempering to the rice.",
      "Mix well and serve chilled or at room temperature."
    ],

    funFact:
      "Curd rice is a popular South Indian comfort food and is often served toward the end of a traditional meal."
  },

  {
    id: 14,
    name: "Dal Makhani",
    image: "/images/indian/dinner/Dal Makhani.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "90 mins",
    difficulty: "Medium",
    rating: 4.9,

    ingredients: [
      "Whole black lentils",
      "Kidney beans",
      "Butter",
      "Cream",
      "Tomatoes",
      "Onion",
      "Ginger garlic paste",
      "Garam masala",
      "Red chili powder",
      "Salt"
    ],

    instructions: [
      "Soak the lentils and kidney beans overnight.",
      "Cook them until very soft.",
      "Prepare a tomato and onion masala.",
      "Add the cooked lentils and kidney beans.",
      "Simmer slowly so the flavors combine.",
      "Add butter and cream.",
      "Finish with garam masala and serve hot."
    ],

    funFact:
      "Dal makhani gets its name from 'makhan', the Hindi word for butter."
  },

  {
    id: 15,
    name: "Paneer Tikka",
    image: "/images/indian/dinner/Paneer Tikka.jpg",
    cuisine: "Indian",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "35 mins",
    difficulty: "Easy",
    rating: 4.8,

    ingredients: [
      "Paneer",
      "Yogurt",
      "Bell peppers",
      "Onion",
      "Ginger garlic paste",
      "Red chili powder",
      "Garam masala",
      "Turmeric",
      "Lemon juice",
      "Salt"
    ],

    instructions: [
      "Cut paneer, onion, and bell peppers into pieces.",
      "Prepare a marinade using yogurt, spices, lemon juice, and salt.",
      "Coat the paneer and vegetables with the marinade.",
      "Thread them onto skewers.",
      "Grill or bake until lightly charred.",
      "Serve hot with lemon and chutney."
    ],

    funFact:
      "Paneer tikka is a popular vegetarian alternative to meat-based tikka dishes."
  },

  // =====================================================
  // CHINESE RECIPES
  // =====================================================

  // Chinese Breakfast

  {
    id: 16,
    name: "Chinese Scallion Pancakes",
    image: "/images/chinese/breakfast/Chinese Scallion Pancakes.jpg",
    cuisine: "Chinese",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "35 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "All-purpose flour",
      "Warm water",
      "Scallions",
      "Sesame oil",
      "Vegetable oil",
      "Salt"
    ],

    instructions: [
      "Prepare a soft dough using flour and warm water.",
      "Roll the dough into a thin sheet.",
      "Brush with sesame oil and sprinkle with salt and scallions.",
      "Roll and fold the dough to create layers.",
      "Roll it again into a flat pancake.",
      "Pan-fry until golden and crispy on both sides.",
      "Serve hot."
    ],

    funFact:
      "Chinese scallion pancakes are known for their flaky, layered texture."
  },

  {
    id: 17,
    name: "Congee",
    image: "/images/chinese/breakfast/Congee.jpg",
    cuisine: "Chinese",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "60 mins",
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "Rice",
      "Water or stock",
      "Ginger",
      "Spring onions",
      "Salt"
    ],

    instructions: [
      "Rinse the rice thoroughly.",
      "Add rice and water or stock to a pot.",
      "Bring to a boil.",
      "Reduce the heat and simmer slowly.",
      "Stir occasionally until the rice breaks down into a creamy porridge.",
      "Season with salt.",
      "Garnish with ginger and spring onions."
    ],

    funFact:
      "Congee is a rice porridge eaten across many parts of Asia and can be served with many different toppings."
  },

  // Chinese Lunch

  {
    id: 18,
    name: "Chow Mein",
    image: "/images/chinese/lunch/Chow Mein.webp",
    cuisine: "Chinese",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "25 mins",
    difficulty: "Easy",
    rating: 4.7,

    ingredients: [
      "Chow mein noodles",
      "Cabbage",
      "Carrot",
      "Bell pepper",
      "Spring onions",
      "Soy sauce",
      "Sesame oil",
      "Garlic",
      "Salt"
    ],

    instructions: [
      "Cook the noodles according to the package instructions.",
      "Heat oil in a wok.",
      "Stir-fry garlic and vegetables over high heat.",
      "Add the cooked noodles.",
      "Add soy sauce and sesame oil.",
      "Toss everything together until well combined.",
      "Garnish with spring onions."
    ],

    funFact:
      "The name chow mein comes from a Chinese term associated with stir-fried noodles."
  },

  {
    id: 19,
    name: "Mapo Tofu",
    image: "/images/chinese/lunch/Mapo Tofu.jpg",
    cuisine: "Chinese",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "30 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Soft tofu",
      "Doubanjiang",
      "Garlic",
      "Ginger",
      "Spring onions",
      "Sichuan pepper",
      "Soy sauce",
      "Sesame oil"
    ],

    instructions: [
      "Cut tofu into cubes.",
      "Prepare a fragrant base with garlic and ginger.",
      "Add doubanjiang and cook briefly.",
      "Add tofu and a small amount of water.",
      "Simmer gently so the tofu absorbs the sauce.",
      "Finish with Sichuan pepper and spring onions.",
      "Serve hot with rice."
    ],

    funFact:
      "Mapo tofu is strongly associated with Sichuan cuisine and its characteristic spicy, numbing flavor."
  },

  // Chinese Dinner

  {
    id: 20,
    name: "Dumplings",
    image: "/images/chinese/dinner/Dumplings.jpg",
    cuisine: "Chinese",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "45 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Dumpling wrappers",
      "Cabbage",
      "Carrot",
      "Spring onions",
      "Ginger",
      "Garlic",
      "Soy sauce",
      "Sesame oil",
      "Salt"
    ],

    instructions: [
      "Finely chop the vegetables.",
      "Mix them with ginger, garlic, soy sauce, sesame oil, and salt.",
      "Place a small amount of filling in each wrapper.",
      "Fold and seal the wrappers.",
      "Steam, boil, or pan-fry the dumplings.",
      "Serve with a dipping sauce."
    ],

    funFact:
      "Dumplings are traditionally associated with celebrations such as Chinese New Year."
  },

  {
    id: 21,
    name: "Kung Pao Chicken",
    image: "/images/chinese/dinner/Kung Pao Chicken.jpg",
    cuisine: "Chinese",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "30 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Chicken",
      "Peanuts",
      "Dried red chilies",
      "Spring onions",
      "Garlic",
      "Ginger",
      "Soy sauce",
      "Vinegar",
      "Sugar",
      "Sesame oil"
    ],

    instructions: [
      "Cut the chicken into small pieces.",
      "Prepare a sauce using soy sauce, vinegar, sugar, and sesame oil.",
      "Stir-fry the chicken until lightly browned.",
      "Add garlic, ginger, and dried chilies.",
      "Add the sauce and toss well.",
      "Add roasted peanuts and spring onions.",
      "Serve hot with rice."
    ],

    funFact:
      "Kung Pao chicken is a famous Sichuan-style dish known for combining spicy chilies with crunchy peanuts."
  },

  // =====================================================
  // WESTERN RECIPES
  // =====================================================

  // Western Breakfast

  {
    id: 22,
    name: "Bacon",
    image: "/images/western/breakfast/bacon.jpg",
    cuisine: "Western",
    category: "Non-Vegetarian",
    meal: "Breakfast",
    cookingTime: "15 mins",
    difficulty: "Easy",
    rating: 4.5,

    ingredients: [
      "Bacon strips"
    ],

    instructions: [
      "Place the bacon strips in a pan.",
      "Cook over medium heat until the fat renders.",
      "Turn the strips and cook until crisp.",
      "Drain excess fat and serve hot."
    ],

    funFact:
      "Bacon is commonly served as part of breakfast meals in many Western countries."
  },

  {
    id: 23,
    name: "Scrambled Eggs",
    image: "/images/western/breakfast/scrambelled eggs.webp",
    cuisine: "Western",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "10 mins",
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "Eggs",
      "Milk",
      "Butter",
      "Black pepper",
      "Salt"
    ],

    instructions: [
      "Crack the eggs into a bowl.",
      "Whisk the eggs with milk, salt, and pepper.",
      "Melt butter in a pan over low heat.",
      "Pour in the eggs.",
      "Stir gently until the eggs are softly set.",
      "Remove from heat and serve immediately."
    ],

    funFact:
      "The key to creamy scrambled eggs is gentle cooking rather than high heat."
  },

  // Western Lunch

  {
    id: 24,
    name: "Filet",
    image: "/images/western/lunch/fillet.jpg",
    cuisine: "Western",
    category: "Non-Vegetarian",
    meal: "Lunch",
    cookingTime: "25 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Beef filet",
      "Butter",
      "Garlic",
      "Rosemary",
      "Black pepper",
      "Salt"
    ],

    instructions: [
      "Bring the steak close to room temperature.",
      "Season both sides with salt and pepper.",
      "Heat a heavy pan.",
      "Sear the filet on both sides.",
      "Add butter, garlic, and rosemary.",
      "Baste the steak with the melted butter.",
      "Allow the steak to rest before serving."
    ],

    funFact:
      "Filet is prized for its tenderness because it comes from a relatively little-used muscle."
  },

  {
    id: 25,
    name: "Lentil Pasta",
    image: "/images/western/lunch/lentilpasta.jpg",
    cuisine: "Western",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "30 mins",
    difficulty: "Easy",
    rating: 4.5,

    ingredients: [
      "Pasta",
      "Lentils",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Olive oil",
      "Italian herbs",
      "Parmesan cheese",
      "Salt"
    ],

    instructions: [
      "Cook the pasta according to the package instructions.",
      "Cook lentils until tender.",
      "Sauté onion and garlic in olive oil.",
      "Add tomatoes and Italian herbs.",
      "Add the cooked lentils and simmer.",
      "Mix the sauce with the cooked pasta.",
      "Top with Parmesan and serve."
    ],

    funFact:
      "Lentils are a plant-based source of protein and are often paired with pasta in hearty meals."
  },

  // Western Dinner

  {
    id: 26,
    name: "Chicken Alfredo Pasta",
    image: "/images/western/dinner/Chicken Alfredo Pasta.webp",
    cuisine: "Western",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "35 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Pasta",
      "Chicken breast",
      "Butter",
      "Cream",
      "Parmesan cheese",
      "Garlic",
      "Black pepper",
      "Salt"
    ],

    instructions: [
      "Cook the pasta until al dente.",
      "Season and cook the chicken until fully cooked.",
      "Slice the chicken into pieces.",
      "Melt butter and sauté garlic.",
      "Add cream and Parmesan cheese.",
      "Stir until the sauce becomes creamy.",
      "Add pasta and chicken.",
      "Toss well and serve hot."
    ],

    funFact:
      "The original Alfredo sauce is traditionally associated with butter and Parmesan cheese."
  },

  {
    id: 27,
    name: "Mac and Cheese",
    image: "/images/western/dinner/Mac and Cheese.jpg",
    cuisine: "Western",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "35 mins",
    difficulty: "Easy",
    rating: 4.7,

    ingredients: [
      "Macaroni",
      "Cheddar cheese",
      "Milk",
      "Butter",
      "Flour",
      "Black pepper",
      "Salt"
    ],

    instructions: [
      "Cook the macaroni until al dente.",
      "Melt butter in a saucepan.",
      "Add flour and cook briefly.",
      "Gradually add milk while stirring.",
      "Add grated cheese and stir until melted.",
      "Combine the sauce with the cooked macaroni.",
      "Serve immediately or bake until golden."
    ],

    funFact:
      "Mac and cheese is a classic comfort food built around pasta and a creamy cheese sauce."
  },

  {
    id: 28,
    name: "Vegetable Ratatouille",
    image: "/images/western/dinner/Vegetable Ratatouille.webp",
    cuisine: "Western",
    category: "Vegetarian",
    meal: "Dinner",
    cookingTime: "60 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Eggplant",
      "Zucchini",
      "Bell peppers",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Olive oil",
      "Herbs",
      "Salt"
    ],

    instructions: [
      "Cut the vegetables into similar-sized pieces.",
      "Sauté onion and garlic in olive oil.",
      "Add the vegetables gradually.",
      "Add tomatoes and herbs.",
      "Cook slowly until the vegetables become tender.",
      "Season with salt and pepper.",
      "Serve warm."
    ],

    funFact:
      "Ratatouille is a traditional vegetable dish associated with Provence in southern France."
  },

  // =====================================================
  // ARABIC RECIPES
  // =====================================================

  // Arabic Breakfast

  {
    id: 29,
    name: "Ful Medames",
    image: "/images/middle-eastern/breakfast/Ful Medames.jpeg",
    cuisine: "Arabic",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "30 mins",
    difficulty: "Easy",
    rating: 4.7,

    ingredients: [
      "Fava beans",
      "Garlic",
      "Lemon juice",
      "Olive oil",
      "Cumin",
      "Parsley",
      "Tomato",
      "Salt"
    ],

    instructions: [
      "Cook the fava beans until tender.",
      "Lightly mash some of the beans.",
      "Add garlic, cumin, lemon juice, and salt.",
      "Drizzle with olive oil.",
      "Garnish with parsley and chopped tomato.",
      "Serve warm with bread."
    ],

    funFact:
      "Ful medames is a traditional breakfast dish made from cooked fava beans and is widely enjoyed across the Arab world."
  },

  {
    id: 30,
    name: "Manakish",
    image: "/images/middle-eastern/breakfast/Manakish.jpg",
    cuisine: "Arabic",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "35 mins",
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "Flour",
      "Yeast",
      "Water",
      "Olive oil",
      "Za'atar",
      "Sesame seeds",
      "Salt"
    ],

    instructions: [
      "Prepare a soft dough using flour, yeast, water, olive oil, and salt.",
      "Allow the dough to rise.",
      "Divide and flatten the dough.",
      "Spread za'atar mixed with olive oil over the surface.",
      "Bake until the edges are golden.",
      "Serve warm."
    ],

    funFact:
      "Manakish is a popular Levantine flatbread often topped with za'atar or other savory toppings."
  },

  {
    id: 31,
    name: "Shakshuka",
    image: "/images/middle-eastern/breakfast/Shakshuka.jpg",
    cuisine: "Arabic",
    category: "Vegetarian",
    meal: "Breakfast",
    cookingTime: "30 mins",
    difficulty: "Easy",
    rating: 4.8,

    ingredients: [
      "Eggs",
      "Tomatoes",
      "Onion",
      "Bell pepper",
      "Garlic",
      "Cumin",
      "Paprika",
      "Olive oil",
      "Salt"
    ],

    instructions: [
      "Sauté onion, garlic, and bell pepper in olive oil.",
      "Add tomatoes and spices.",
      "Cook until the tomato sauce thickens.",
      "Make small wells in the sauce.",
      "Crack eggs into the wells.",
      "Cover and cook until the eggs are set to your preference.",
      "Serve with bread."
    ],

    funFact:
      "Shakshuka is a popular dish across North Africa and the Middle East featuring eggs cooked in a spiced tomato sauce."
  },

  // Arabic Lunch

  {
    id: 32,
    name: "Chicken Mandi",
    image: "/images/middle-eastern/lunch/Chicken Mandi.jpg",
    cuisine: "Arabic",
    category: "Non-Vegetarian",
    meal: "Lunch",
    cookingTime: "90 mins",
    difficulty: "Hard",
    rating: 4.8,

    ingredients: [
      "Chicken",
      "Basmati rice",
      "Onion",
      "Garlic",
      "Cardamom",
      "Cinnamon",
      "Cloves",
      "Black pepper",
      "Saffron",
      "Salt"
    ],

    instructions: [
      "Season the chicken with spices and salt.",
      "Prepare fragrant rice using whole spices.",
      "Cook the chicken until tender and well browned.",
      "Combine the cooked rice with the aromatic spices.",
      "Place the chicken over the rice.",
      "Finish cooking so the flavors combine.",
      "Serve hot."
    ],

    funFact:
      "Mandi is strongly associated with Yemen and is also widely enjoyed throughout the Arabian Peninsula."
  },

  {
    id: 33,
    name: "Chicken Shawarma",
    image: "/images/middle-eastern/lunch/Chicken Shawarma.jpg",
    cuisine: "Arabic",
    category: "Non-Vegetarian",
    meal: "Lunch",
    cookingTime: "45 mins",
    difficulty: "Medium",
    rating: 4.9,

    ingredients: [
      "Chicken",
      "Yogurt",
      "Garlic",
      "Lemon juice",
      "Cumin",
      "Paprika",
      "Coriander",
      "Turmeric",
      "Salt",
      "Pita bread"
    ],

    instructions: [
      "Marinate chicken with yogurt, lemon juice, garlic, and spices.",
      "Allow the chicken to absorb the marinade.",
      "Cook the chicken until tender and lightly charred.",
      "Slice the chicken thinly.",
      "Place the chicken inside pita bread.",
      "Add vegetables and sauce.",
      "Serve warm."
    ],

    funFact:
      "Shawarma is traditionally associated with meat cooked on a vertical rotating spit."
  },

  {
    id: 34,
    name: "Falafel Plate",
    image: "/images/middle-eastern/lunch/Falafel Plate.jpg",
    cuisine: "Arabic",
    category: "Vegetarian",
    meal: "Lunch",
    cookingTime: "40 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Chickpeas",
      "Parsley",
      "Cilantro",
      "Garlic",
      "Onion",
      "Cumin",
      "Coriander",
      "Salt",
      "Oil"
    ],

    instructions: [
      "Soak dried chickpeas until softened.",
      "Grind them with herbs, onion, garlic, and spices.",
      "Shape the mixture into small balls or patties.",
      "Deep fry or bake until golden and crisp.",
      "Serve with salad, pita, hummus, or tahini sauce."
    ],

    funFact:
      "Falafel is a popular Middle Eastern food made from ground legumes and herbs."
  },

  // Arabic Dinner

  {
    id: 35,
    name: "Kabsa",
    image: "/images/middle-eastern/dinner/Kabsa.webp",
    cuisine: "Arabic",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "75 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Chicken",
      "Basmati rice",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Cardamom",
      "Cinnamon",
      "Cloves",
      "Black pepper",
      "Dried lime",
      "Salt"
    ],

    instructions: [
      "Sauté onion and garlic.",
      "Add tomatoes and spices.",
      "Add chicken and cook until partially tender.",
      "Add rice and the required amount of liquid.",
      "Cover and cook until the rice is tender.",
      "Remove the chicken and brown it if desired.",
      "Serve the chicken over the fragrant rice."
    ],

    funFact:
      "Kabsa is a well-known rice dish associated particularly with Saudi Arabian cuisine."
  },

  {
    id: 36,
    name: "Lamb Kebab",
    image: "/images/middle-eastern/dinner/Lamb Kebab.jpg",
    cuisine: "Arabic",
    category: "Non-Vegetarian",
    meal: "Dinner",
    cookingTime: "40 mins",
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "Lamb",
      "Onion",
      "Garlic",
      "Parsley",
      "Cumin",
      "Paprika",
      "Black pepper",
      "Olive oil",
      "Salt"
    ],

    instructions: [
      "Cut the lamb into suitable pieces.",
      "Combine the lamb with onion, garlic, herbs, spices, and olive oil.",
      "Allow the lamb to marinate.",
      "Thread the lamb onto skewers.",
      "Grill until cooked and lightly charred.",
      "Rest briefly before serving.",
      "Serve with salad, bread, or a dipping sauce."
    ],

    funFact:
      "Kebab refers to a broad family of grilled or roasted meat dishes found across the Middle East and surrounding regions."
  }
];

export default recipes;