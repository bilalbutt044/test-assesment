import { useState, useEffect } from "react"
import './App.css';

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = () => {
    fetch('https://api.unsplash.com/photos?w=300&h=300', {
      headers: {
        'Authorization': `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPhotos(data)
      })
  }



  return (
    <div className="App">

      <div className="search-filter">
        <div className="search">
          <input type='text'  />
          <button>Search</button>
        </div>

        <div className="filter">
            <select>
              <option>Page size</option>
              <option>category</option>
              <option>tags</option>
            </select>
        </div>
      </div>

      <div className="grid">
        {photos.map(p => (
        <div className="image">
          <img src={p?.urls?.thumb} alt="random pic" loading="lazy" />
        </div>
        ))}

      </div>
    </div>
  );
}

export default App;
