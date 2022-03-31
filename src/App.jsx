import { useState, useEffect } from "react";
import "./App.css";
import Search from "./Components/Search";
import GalleryGrid from "./Components/GalleryGrid";
import { getImages, searchImages } from "./Services/api";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const data = await getImages({query,page})
      setPhotos((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
      
    } catch (error) {
      setError(true);
    }
  };

  const searchPhotos = async () => {
    try {
      const data = await searchImages({query, searchPage})
      setPhotos((prev) => [...prev, ...data?.results]);
      setSearchPage((prev) => prev + 1);
    } catch (error) {}
  };

  return (
    <div className="App">
      <Search searchPhotos={searchPhotos} setPhotos={setPhotos} query={query} setQuery={setQuery} />
      <GalleryGrid photos={photos} error={error} getPhotos={getPhotos} />
    </div>
  );
}

export default App;
