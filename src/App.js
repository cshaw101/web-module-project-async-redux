import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'

const apiURL = 'https://official-joke-api.appspot.com/random_joke' 

//i want to get a joke and show the setup  and when you click on the joke the punchline folds down

function App() {
  return (
    <div className="App">
      Want To Hear a Joke?
    </div>
  );
}

export default App;