import React from 'react';
import { getJoke } from './actions/action';

//const apiURL = 'https://official-joke-api.appspot.com/random_joke' 

//i want to get a joke and show the setup  and when you click on the joke the punchline folds down

function App() {


  const handleClick = (e) => {
e.preventDefault();

  }

  
  return (
    <div className="App">
      Want To Hear a Joke?
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;