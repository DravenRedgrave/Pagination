import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Countes from './components/Countes';
import Pagination from './components/Pagination';

function App() {

  const [countres,setCounters] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [countresPerPage] = useState(10)

  useEffect(()=>{
    const getCountries = async () =>{
      setLoading(true)
      const res = await axios.get('https://restcountries.eu/rest/v2/all')
      setCounters(res.data)
      setLoading(false)
    }
    getCountries()
  },[])

  const lastCountryIndex = currentPage * countresPerPage
  const firstCountryIndex = lastCountryIndex - countresPerPage
  const currentCountry = countres.slice(firstCountryIndex,lastCountryIndex)

  const paginete = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countres</h1>
      <Countes countres={currentCountry} loading={loading}/>
      <Pagination countresPerPage={countresPerPage} totalCountries={countres.length} paginete={paginete}/>
    </div>
  );
}

export default App;
