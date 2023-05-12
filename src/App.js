import './App.css';
import {useEffect, useState} from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url ='http://localhost:4000/tours';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      //console.log(tours);
    }
    catch(error) {
      setLoading(false)
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  },[])

  if(loading)
  {
    return (
      <div>
        <Loading/>
      </div>
    )
  }

  if(tours.length === 0)
  {
    return(
      <div className='no-tours'>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App"> 
      <Tours tours = {tours} removeTour = {removeTour}/>
    </div>
  );
}

export default App;
