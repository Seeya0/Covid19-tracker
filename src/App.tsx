import { useEffect, useState } from 'react';
import { fetchData } from './api';
import './App.css';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchData()
      setData(data)
    })
  }, [])


}

return (
  <div className="App">
    <Header />
  </div>
);
}

export default App;
