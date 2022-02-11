import { useEffect, useState } from 'react';
import { fetchData } from './api';
import './App.css';
import CountryPicker from './components/CountryPicker';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState<string | any>({});
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    (async () => {
      const data = await fetchData()
      console.log(data)
      setData(data)
    })();
  }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data)
    setCountry(country)
  }


  return (
    <div className="App">
      <Header />
      <CountryPicker handleCountryChange={handleCountryChange} />
    </div>
  );
}


export default App;
