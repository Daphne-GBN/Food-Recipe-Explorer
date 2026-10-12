# Savourly 🍽️ — Food Recipe Explorer

Savourly is a React-based web application for discovering recipes across different cuisines and meal categories. Browse recipe ideas, explore ingredients and cooking instructions, save recipes for later, build a favourites list, and try the food quiz.

## ✨ Features

- **Explore recipes:** Browse a collection of food recipes.
- **Cuisine and meal categories:** Discover dishes by cuisine, vegetarian/non-vegetarian preference, and meal type such as breakfast, lunch, or dinner.
- **Recipe details:** View information such as ingredients, cooking instructions, and preparation or cooking time where provided.
- **Search and filters:** Find recipes using the available search and filtering options.
- **Favourites:** Keep track of recipes you like.
- **Saved recipes:** Save recipes to revisit later.
- **Add a recipe:** Enter and submit your own recipe through the recipe form.
- **Food quiz:** Test your food knowledge with the interactive quiz.
- **Informational pages:** Learn about the project and use the contact page.
- **Persistent browser storage:** Local storage is used for user-specific items such as favourites, saved recipes, and user-added recipes.

## 🧰 Tech Stack

- **React** — user interface and reusable components
- **React Router** — client-side navigation
- **CSS** — styling and layout
- **Local Storage** — persistence of selected user data in the browser
- **Create React App / react-scripts** — development server and production build tooling

## 📁 Project Structure

```text
Food-Recipe-Explorer/
├── public/
│   ├── images/             # Images and visual assets
│   └── index.html
├── src/
│   ├── components/         # Reusable UI components
│   ├── data/               # Recipe and application data
│   ├── pages/              # Application pages
│   ├── App.js               # Routes and main application layout
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── index.js             # React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Install **Node.js** and **npm** before running the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Daphne-GBN/Food-Recipe-Explorer.git
   ```

2. Move into the project directory:

   ```bash
   cd Food-Recipe-Explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the local URL shown in your terminal (Create React App typically uses [http://localhost:3000](http://localhost:3000)).

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm run build` | Builds the app for production in the `build/` directory. |
| `npm test` | Starts the test runner. |
| `npm run eject` | Ejects the Create React App configuration. This is a one-way operation. |

## 🧭 Application Pages

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/recipes` | Browse recipes |
| `/recipes/:id` | View details for a selected recipe |
| `/favorites` | View favourite recipes |
| `/saved-recipes` | View saved recipes |
| `/add-recipe` | Add a recipe |
| `/food-quiz` | Take the food quiz |
| `/about` | About the project |
| `/contact` | Contact page |

## 💡 Project Goals

Savourly was built to practise and demonstrate core React concepts, including reusable components, props, state management, client-side routing, form handling, validation, and conditional rendering. It also explores using browser local storage to retain selected user data between visits.

## 🔮 Possible Future Improvements

- Add user accounts and cloud-based recipe synchronisation.
- Connect to a recipe API for a larger, regularly updated recipe catalogue.
- Add more advanced dietary, ingredient, and preparation-time filters.
- Improve automated test coverage and accessibility.
- Add deployment instructions and a live demo link once a public deployment is available.

## 🤝 Contributing

Contributions and suggestions are welcome. You can fork the repository, create a feature branch, and submit a pull request with your changes.

## 📄 License

No license is currently specified in this repository. Unless a license is added, reuse and redistribution may be restricted by default.

---

Made with ❤️ using React.
