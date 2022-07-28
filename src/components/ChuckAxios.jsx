import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const ChuckAxios = () => {


  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // useEffect(() => {
  //   getJoke();
  // }, []);


  const getJoke = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await Axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  const like = () => {
    setLikes(likes + 1);
    setTimeout(() => {
      getJoke();
    }, 1000);
  }

  const dislike = () => {
    setDislikes(dislikes + 1);
    setTimeout(() => {
      getJoke();
    }, 1000);
  }

  return (
    <div>
      <h1>Universe of jokes</h1>
      <button onClick={getJoke}>Get a joke</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {joke && <p>{joke}</p>}

      {/* vote the joke */}
      <div>
        <p>
          {joke ?
            (
              <>
                <button onClick={like}>Like</button> {" "}
                <button onClick={dislike}>Dislike</button>
              </>
            ) : null}
        </p>
      </div>




      {/* show the number of likes and dislikes */}
      <p>Jokes that you like: {likes}</p>
      <p>Jokes that you dislike: {dislikes}</p>



    </div>
  );
}

export default ChuckAxios;
