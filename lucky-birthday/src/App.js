import { useState, React } from "react";
import happy from "./happy.svg";
import sad from "./sad.svg";

// Take user's complete birthday
// And his/her lucky number.
// Now, find out if the sum of digits of birthday is divisible by the lucky number.
// Show the result to the user.

let dateInput = "";
let luckyNo = 0;

//var to store images

const happyImageDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);

const unhappyImageDiv = (
  <img alt="sadImage" src={sad} width="100%" height="200px" />
);

function App() {
  // state to display privacy notice
  const [displayAlert, setDisplayAlert] = useState("flex");
  //  state to store the result text and img
  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkLuckyBirthday(e) {
    //prevent the refreshing of the page on submit of the form
    e.preventDefault();
    // to convert the date into small strings
    const dateArray = dateInput.split("-");
    let sum = 0;
    // to access each string
    dateArray.map((string) => {
      //to access each number in the string and add into sum
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
      // exit the map loop with sum or return sum from the map
      return sum;
    });

    //now check if the sum is divisible by lucky no
    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Hurray! You are a lucky person!", happyImageDiv]);
    } else {
      setDisplayResult(["Oops! You are unlucky!", unhappyImageDiv]);
    }
  }

  return (
    <div className="App">
      {/* header section */}

      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="titleOfPage">
          <h1>Is your birthday lucky?</h1>
          <a href="#mainSection">👇🏼👇🏼👇🏼👇🏼</a>
        </div>
      </div>

      <section id="mainSection" className="section">
        {/* div for the privacy alert */}
        <div id="alertBox" style={{ display: `${displayAlert}` }}>
          <div className="notice">
            <strong>Privacy Notice!</strong> We are not storing your data
          </div>

          <div
            onClick={() => setDisplayAlert("none")}
            style={{
              paddingLeft: "1rem",
              cursor: "pointer",
              fontSize: "0.5rem",
            }}
          >
            <span role="img"> &#10060; </span>
          </div>
        </div>
        <h2>Enter your birthday day and lucky number to continue...</h2>

        <form onSubmit={checkLuckyBirthday}>
          <label className="label" htmlFor="dateInput"></label>
          <input
            id="dateInput"
            type="date"
            required
            onChange={(e) => {
              dateInput = e.target.value;
            }}
          />

          <label className="label" htmlfor="luckyNumber"></label>

          <input
            id="luckyNumber"
            type="number"
            onChange={function xyz(event) {
              luckyNo = event.target.value;
            }}
            required
          />

          <button type="submit">Check</button>
        </form>

        {/* output result div */}
        <div className="output">
          <div className="label">{displayResult[0]}</div>
          {displayResult[1]}
        </div>

        {/* footer div */}

        <footer>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Ananyamadhu08">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>

            <li className="footerLink">
              <a href="">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>

            <li className="footerLink">
              <a href="">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </li>

            <li className="footerLink">
              <a href="">
                <i className="fas fa-briefcase" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="legacyText">
            © 2020 | ananyaMadhu |{" "}
            <a
              className="privacy-policy"
              href="#alertbox"
              onClick={() => setDisplayAlert("flex")}
              style={{ cursor: "pointer", color: "black" }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
