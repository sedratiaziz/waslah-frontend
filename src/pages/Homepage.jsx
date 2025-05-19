import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/AuthContext'
import axios from 'axios'
import '../styles/Homepage.css'

const internCards = [
  {
    id: 1,
    image: "/internship-img1.jpg",
    name: "Name",
    company: "Company",
  },
  {
    id: 2,
    image: "/internship-img2.jpg",
    name: "Name",
    company: "Company",
  },
  {
    id: 3,
    image: "/internship-img3.jpg",
    name: "Name",
    company: "Company",
  },
  {
    id: 4,
    image: "/internship-img4.jpg",
    name: "Name",
    company: "Company",
  },
];

function Homepage() {
  const [search, setSearch] = useState("")

  const filteredCards = internCards.filter(
    (card) =>
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.company.toLowerCase().includes(search.toLowerCase())
  )

  // useContext(): allows me to consume the context

  // sending request to protected route that needs a token
  async function callProtectedRoute(){
    const token = localStorage.getItem("token")
    const response= await axios.get(`${import.meta.env.VITE_BACKEND_URL}/test-jwt/checkout`,{headers:{Authorization:`Bearer ${token}`}})
    console.log(response.data)
  }

  callProtectedRoute()
  return (
    <>
      {/* Supervisor View */}
      <main className="homepage-main">
      <div className="homepage-header">
        <h1>Bonjour, [Name]!</h1>
        <p className="homepage-subtitle">
          Manage all your interns from the same place.
        </p>
        <p className="homepage-date">23 May 2024</p>
      </div>

      <div className="homepage-searchbar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Find..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="homepage-cards">
        {filteredCards.map((card) => (
          <div className="homepage-card" key={card.id}>
            <div className="homepage-card-img">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="homepage-card-info">
              <h3>{card.name}</h3>
              <p>{card.company}</p>
              <span className="homepage-card-manage">Manage</span>
            </div>
          </div>
        ))}
      </div>      
      </main> 








         {/* Trainee View */}
         <main className="homepage-main">
      <div className="homepage-header">
        <h1>Buenos Dias, [Name]!</h1>
        <p className="homepage-subtitle">
          One-swipe away from unlocking your future.
        </p>
        <p className="homepage-date">23 May 2024</p>
      </div>

      <div className="homepage-searchbar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Find..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="homepage-cards">
        {filteredCards.map((card) => (
          <div className="homepage-card" key={card.id}>
            <div className="homepage-card-img">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="homepage-card-info">
              <h3>{card.name}</h3>
              <p>{card.company}</p>
              <span className="homepage-card-manage">Apply</span>
            </div>
          </div>
        ))}
      </div>      
      </main> 











         {/* Student View */}
         <main className="homepage-main">
      <div className="homepage-header">
        <h1>Buenos Dias, [Name]!</h1>
        <p className="homepage-subtitle">
          One-swipe away from unlocking your future.
        </p>
        <p className="homepage-date">23 May 2024</p>
      </div>

      <div className="homepage-searchbar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Find..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="homepage-cards">
        {filteredCards.map((card) => (
          <div className="homepage-card" key={card.id}>
            <div className="homepage-card-img">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="homepage-card-info">
              <h3>{card.name}</h3>
              <p>{card.company}</p>
              <span className="homepage-card-manage">Apply</span>
            </div>
          </div>
        ))}
      </div>      
      </main> 
    </>
  )
}

export default Homepage
