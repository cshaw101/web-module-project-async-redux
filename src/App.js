
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from './actions/action'; 

function App() {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  const handleNewJokeClick = () => {
    
    dispatch(fetchJoke());
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>{joke}</p>
          <button onClick={handleNewJokeClick}>New Joke</button> 
        </>
      )}
    </div>
  );
}

export default App;
