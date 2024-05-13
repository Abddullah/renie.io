import React, { useEffect, useState } from 'react';
// local imports
import './App.css';
import Header from './components/header';
import Carouselbar from './components/carousel';
import Card from './components/card';

function App() {
  const [products, setproducts] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);

  useEffect(() => {
    if (products.length == 0) {
      mock_data_laod();
    }
  }, [])

  // function for fetching data
  const mock_data_laod = () => {
    fetch(`http://localhost:3001/products?page=${pageNumber + 1}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(newData => {
        setproducts(prevProducts => [...prevProducts, ...newData]);
        setpageNumber(pageNumber + 1)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  console.log(products, 'products');

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Carouselbar />
        <Card products={products} />
        {
          pageNumber <= 3 &&
          <div className="loadMoreButtonContainer">
            <button
              className="loadMoreButton"
              onClick={() => mock_data_laod()}
            >
              Load More
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;

// FE CODE


