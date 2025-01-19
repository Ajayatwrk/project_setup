import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('/api/test')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return <h1>Welcome to the Company Website</h1>;
};

export default Home;
