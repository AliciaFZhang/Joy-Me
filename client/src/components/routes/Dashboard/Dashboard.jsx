import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaList from '../RestaList.jsx';
import { auth } from '../../firebase-config.jsx';
import './dashboard.css';

function Dashboard({isAuth}) {
  const [resta, setResta] = useState([]);
  const [search, setSearch] = useState({
    'restaname':'',
    'restaloc': ''
  })

  useEffect(()=>{
    axios.get('http://ip-api.com/json')
    .then((response) => {
      setSearch({restaloc: response.data.city});
      return axios.post('/yelp', response.data)})
    .then((res) => setResta(res.data.businesses))
    .catch((err) => console.log('err', err));
  }, []);

  function handleChange(e) {
    setSearch({[e.target.name]:e.target.value});
  }
  function handleSearch(e) {
    e.preventDefault();
    console.log('search', search);
     axios.post('/yelp/custom', search)
     .then((res) => setResta(res.data.businesses))
    .catch((err) => console.log('err', err));
  }
  return (
    <div id = 'addDate'>
      <form className="search" onSubmit={handleSearch}>
        <label className="searchLabel">Search</label>
        <input className="searchInput" type="text" onChange={handleChange} name="restaname" value={search.restaname} />
        <label className="searchLabel">Near</label>
        <input className="searchInput" type="text" onChange={handleChange} name="reastaloc" value={search.restaloc} placeholder={search.restaloc}/>
        <input type="submit" className="searchSubmit" value="🔍"/>
      </form>
    {resta.length > 0? <RestaList restaList={ resta } isAuth={ isAuth}/> : <div>Loading</div>}
    </div>
  );
}

export default Dashboard;