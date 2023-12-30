import { useState } from "react";
import "./index.css";

const messages = [
  "React lernen ⚛️",
  "Für Jobs bewerben 💼",
  "Investier dein Geld 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Schritt {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Zurück
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Nächste
        </button>
      </div>
    </div>
  );
}

export default App;
