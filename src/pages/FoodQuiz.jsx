
import React, { useState } from "react";

const questions = [
  {
    question: "Where did the early ancestors of the samosa originate?",
    options: [
      "South America",
      "The Middle East and Central Asia",
      "Japan",
      "Australia"
    ],
    answer: 1,
    explanation:
      "Early forms of the samosa appeared in the Middle East and Central Asia before spreading to India."
  },
  {
    question: "Which country is most closely associated with sushi?",
    options: ["Japan", "Mexico", "Italy", "Thailand"],
    answer: 0,
    explanation:
      "Sushi developed into its familiar modern forms in Japan."
  },
  {
    question: "Which Italian city is especially associated with modern pizza?",
    options: ["Venice", "Milan", "Naples", "Florence"],
    answer: 2,
    explanation:
      "Naples is widely recognized as the birthplace of modern pizza."
  },
  {
    question: "Which ingredient is essential in traditional hummus?",
    options: ["Potatoes", "Chickpeas", "Cabbage", "Rice"],
    answer: 1,
    explanation:
      "Chickpeas are the main ingredient in traditional hummus, along with tahini, lemon juice, and seasonings."
  },
  {
    question: "Where did the croissant develop into its familiar modern form?",
    options: ["France", "Austria", "Spain", "Greece"],
    answer: 0,
    explanation:
      "The modern croissant developed in France from earlier Austrian kipferl pastries."
  },
  {
    question: "Which generally has more protein per 100 g when cooked?",
    options: ["White rice", "Lentils", "Cucumber", "Apple"],
    answer: 1,
    explanation:
      "Cooked lentils typically contain around 9 g of protein per 100 g, more than cooked white rice."
  },
  {
    question: "Which fruit generally contains more vitamin C per 100 g?",
    options: ["Banana", "Orange", "Pear", "Watermelon"],
    answer: 1,
    explanation:
      "Oranges generally contain more vitamin C per 100 g than bananas, pears, or watermelon."
  },
  {
    question: "Which food generally contains more protein per 100 g?",
    options: ["Cucumber", "Paneer", "Lettuce", "Watermelon"],
    answer: 1,
    explanation:
      "Paneer is generally richer in protein than these fruits and vegetables."
  },
  {
    question: "Which macronutrient is the body's preferred quick energy source?",
    options: ["Carbohydrates", "Vitamins", "Water", "Minerals"],
    answer: 0,
    explanation:
      "Carbohydrates provide glucose, which the body uses as an important energy source."
  },
  {
    question: "Which mineral is essential for making haemoglobin in red blood cells?",
    options: ["Iron", "Sodium", "Iodine", "Fluoride"],
    answer: 0,
    explanation:
      "Iron is a key component of haemoglobin, which carries oxygen in the blood."
  },
  {
    question: "Kimchi is especially associated with which country?",
    options: ["South Korea", "Egypt", "Portugal", "Argentina"],
    answer: 0,
    explanation:
      "Kimchi is a traditional Korean fermented vegetable dish."
  },
  {
    question: "Tacos are traditionally associated with which country?",
    options: ["India", "Mexico", "China", "Germany"],
    answer: 1,
    explanation:
      "Tacos are a well-known and important part of Mexican cuisine."
  },
  {
    question: "Pad Thai is a famous dish from which country?",
    options: ["Vietnam", "Thailand", "Japan", "Turkey"],
    answer: 1,
    explanation:
      "Pad Thai is a stir-fried noodle dish associated with Thai cuisine."
  },
  {
    question: "Falafel is popular across which broad region?",
    options: [
      "The Middle East",
      "Northern Europe",
      "The Arctic",
      "Oceania only"
    ],
    answer: 0,
    explanation:
      "Falafel is widely enjoyed across the Middle East, although its exact origins are debated."
  },
  {
    question: "Feijoada is especially associated with which country?",
    options: ["Brazil", "Canada", "Nepal", "Sweden"],
    answer: 0,
    explanation:
      "Feijoada is a bean stew strongly associated with Brazilian cuisine."
  },
  {
    question: "Which statement about chilli peppers and black pepper is correct?",
    options: [
      "Every chilli is hotter than black pepper",
      "Black pepper always causes more heat",
      "They contain different compounds responsible for pungency",
      "Neither can taste pungent"
    ],
    answer: 2,
    explanation:
      "Chilli peppers contain capsaicin, while black pepper contains piperine. Their pungency differs."
  },
  {
    question: "Does brown sugar always have significantly fewer calories than white sugar?",
    options: [
      "Yes, always",
      "No, their calorie contents are broadly similar",
      "Brown sugar has no calories",
      "White sugar contains protein"
    ],
    answer: 1,
    explanation:
      "Brown and white sugar have broadly similar calorie contents by weight."
  },
  {
    question: "Botanically speaking, a tomato is a...",
    options: ["Root", "Fruit", "Leaf", "Stem"],
    answer: 1,
    explanation:
      "A tomato is botanically a fruit because it develops from a flower's ovary and contains seeds."
  },
  {
    question: "Which plant produces coffee beans?",
    options: [
      "Coffee plant",
      "Tea plant",
      "Cocoa tree",
      "Vanilla orchid"
    ],
    answer: 0,
    explanation:
      "Coffee beans are seeds found inside the fruits, commonly called coffee cherries, of coffee plants."
  },
  {
    question: "What generally happens to microbial growth while food remains properly frozen?",
    options: [
      "All microbes are instantly destroyed",
      "Most microbial multiplication stops",
      "The food becomes permanently sterile",
      "All bacteria multiply faster"
    ],
    answer: 1,
    explanation:
      "Freezing generally stops or greatly slows microbial multiplication, but it does not reliably kill all microbes."
  }
];

function FoodQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  function chooseAnswer(index) {
    if (selected !== null) {
      return;
    }

    setSelected(index);

    if (index === q.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="food-quiz-page">
        <section className="quiz-card quiz-result">
          <img
            src="/images/quiz.png"
            alt="Food quiz"
            className="quiz-result-icon"
          />

          <p className="quiz-eyebrow">QUIZ COMPLETED</p>

          <h1>
            {score >= 18
              ? "Culinary Master!"
              : score >= 15
              ? "Food Expert!"
              : score >= 10
              ? "Food Explorer!"
              : "Curious Foodie!"}
          </h1>

          <p className="quiz-result-score">
            {score} / 20 Marks
          </p>

          <p className="quiz-result-percentage">
            Percentage: {percentage}%
          </p>

          <p>
            {score >= 18
              ? "Outstanding! You know your food really well."
              : score >= 15
              ? "Excellent work! You're a food expert."
              : score >= 10
              ? "Good effort! Keep exploring the world of food."
              : "Keep learning! Every dish has a story."}
          </p>

          <button
            className="quiz-primary-button"
            onClick={restartQuiz}
          >
            Play Again
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="food-quiz-page">
      <header className="quiz-heading">
        <p className="quiz-eyebrow">SAVORLY PRESENTS</p>

        <h1>Food Trivia Quiz</h1>

        <p>
          Test your knowledge of food, nutrition, and cuisines
          around the world.
        </p>
      </header>

      <section className="quiz-card">
        <div className="quiz-topline">
          <span>
            Question {current + 1} of {questions.length}
          </span>

          <span>
            Marks: {score} / 20
          </span>
        </div>

        <div
          className="quiz-progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={current + 1}
        >
          <div
            className="quiz-progress-fill"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`
            }}
          />
        </div>

        <h2 className="quiz-question">
          {q.question}
        </h2>

        <div className="quiz-options">
          {q.options.map((option, index) => {
            let className = "quiz-option";

            if (selected !== null && index === q.answer) {
              className += " quiz-correct";
            } else if (selected === index) {
              className += " quiz-incorrect";
            }

            return (
              <button
                type="button"
                key={option}
                className={className}
                onClick={() => chooseAnswer(index)}
                disabled={selected !== null}
              >
                <span className="quiz-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div
            className="quiz-feedback"
            aria-live="polite"
          >
            <h3>
              {selected === q.answer
                ? "Correct! +1 mark"
                : "Not quite! +0 marks"}
            </h3>

            <p>{q.explanation}</p>
          </div>
        )}

        <div className="quiz-footer">
          <span>
            {selected === null
              ? "Choose your answer"
              : `Marks: ${score} / 20`}
          </span>

          <button
            className="quiz-primary-button"
            onClick={nextQuestion}
            disabled={selected === null}
          >
            {current === questions.length - 1
              ? "See Results"
              : "Next Question"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default FoodQuiz;
