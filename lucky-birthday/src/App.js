import './App.css';
import{ useState, React} from "react";

// Take user's complete birthday
// And his/her lucky number.
// Now, find out if the sum of digits of birthday is divisible by the lucky number.
// Show the result to the user.

let dateInput = "";
let luckyNo= 0;

function App() {
  //  state to store the result text and img 
  const [displayResult, setDisplayResult] = useState(["",""])
  
  function checkLuckyBirthday(e){
    //prevent the refreshing of the page on submit of the form 
    e.preventDefault()
    // to convert the date into small strings
    const dateArray = dateInput.split("-");
    let sum = 0;
    // to access each string 
    dateArray.map((string) => {
      //to access each number in the string and add into sum
      for(let i = 0; i < string.length; i++){
        sum = sum + Number(string[i]);
      }
      // exit the map loop with sum or return sum from the map
      return sum
    }
    );

      //now check if the sum is divisible by lucky no
  if(sum % Number(luckyNo) === 0){
    setDisplayResult([
      "Hurray! You are a lucky person!",
      "well put happ impg here"
    ])
  } else {
    setDisplayResult([
      "Oops! You are unlucky!",
      "well put sad img here"]);
  }

  }


  return (
    <div className="App">

      <section>
        <h2>Enter your birthday day and lucky number to continue...</h2>
        
        <form onSubmit={checkLuckyBirthday}>
          <label className="label" htmlFor="dateInput"/>
          <input 
          id="dateInput" 
          type="date" 
          required
          onChange={(e) => {
            dateInput = e.target.value
          }}
          />

          <label className="label" htmlfor="luckyNumber"/>

          <input 
          id="luckyNumber" 
          type="number"
          onChange={function xyz(event){
            luckyNo = event.target.value
          }}
          required
          />

          <button type="submit">Check</button>
          
          <div className="output">

           <div className="label">{displayResult[0]}</div>
           {displayResult[1]}
          
          </div>

        </form>

        {/* output result div */}

      </section>
    
    </div>
  );
}

export default App;
