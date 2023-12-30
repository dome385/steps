import { useState } from "react";
import "./index.css";
import "tachyons";

const messages = [
  "React lernen ⚛️",
  "Für Jobs bewerben 💼",
  "Investier dein Geld 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

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

  function handleClose() {
    setIsOpen(!isOpen);
    setStep(1);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              onClick={() => setStep(1)}
              style={{ cursor: "pointer" }}
              className={step === 1 ? "active" : ""}
            >
              1
            </div>
            <div
              onClick={() => setStep(2)}
              style={{ cursor: "pointer" }}
              className={step === 2 ? "active" : ""}
            >
              2
            </div>
            <div
              onClick={() => setStep(3)}
              style={{ cursor: "pointer" }}
              className={step === 3 ? "active" : ""}
            >
              3
            </div>
          </div>

          <p className="message">
            Schritt {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              className="grow"
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Zurück
            </button>
            <button
              className="grow"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Nächste
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
