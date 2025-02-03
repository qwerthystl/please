import { useState } from "react"; // Keep only what you need
import "./App.css"; // Your styles or remove if you don't need them

const phrases = [
  "no",
  "wehh",
  "bakit?",
  "ediwag",
  "sana sinaksak mo na lang ako, rhaine",
  "okay",
  "block mo na lang ako",
  "tapon mo na lang ako sa ilog",
  "pindutin mo na lang yes tas ghost mo na ako",
  "aba makulit",
  ":(( ",
];

const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [firstNoClicked, setFirstNoClicked] = useState(false); // Track the first "No"
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    if (!firstNoClicked) {
      setFirstNoClicked(true); // Mark that the first "No" has been clicked
    }
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      <img
        alt="cute kissing"
        src="https://media.tenor.com/BwdQJsZmJdcAAAAi/psybirdb1oom.gif"
      />
      <p>Can I be your Valentine, Rhaine?</p>
      <p>{firstNoClicked ? "or not" : "as friends.. lol"}</p>{" "}
      {/* Dynamic text change */}
      {!yesPressed ? (
        <>
          <button
            className="yes-button" // Add the 'yes-button' class
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            className="no-button" // Add the 'no-button' class
            onClick={handleNoClick}
          >
            {getNoButtonText()}
          </button>
        </>
      ) : (
        <>
          <p>
            I know you probably have awesome people to hang out with, and I
            understand if you already have plans for the 14th, but I just wanted
            to take my shot and ask if I could be your Valentine this year?.. HA
            HA HA HA HA HA HA HA sobrang jejemon,,, sobrang latina grabe sobrang
            sarap.. kung no talaga yan ah edi block mo na lang talaga ako kasi
            nakakahiya..
          </p>
          <div className="image-container">
            <img alt="bananarhaine" src="https://tinyurl.com/33whxe4t" />
            <img alt="bananame" src="https://tinyurl.com/ycyh43nu" />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
