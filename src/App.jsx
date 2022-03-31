import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  let page = 1;
  const getPhotos = useCallback(() => {

    fetch(`https://api.unsplash.com/photos?w=300&h=300&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos((prev) => [...prev, ...data]);
        page = page + 1
      });
  }, [page]);

  return (
    <div className="App">
      <div className="search-filter">
        <div className="search">
          <input type="text" />
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

      <InfiniteScroll
        dataLength={photos.length}
        next={getPhotos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid">
          {photos.map((p) => (
            <div className="image">
              <img src={p?.urls?.thumb} alt="random pic" loading="lazy" />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
