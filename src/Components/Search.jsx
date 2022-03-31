
const Search = ({searchPhotos,setPhotos, query, setQuery}) => {

  return (
    <div className="search">
        <input
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <button
        onClick={() => {
          setPhotos([]);
          searchPhotos({query});
        }}
        >
          Search
        </button>
    </div>
  );
};

export default Search;
