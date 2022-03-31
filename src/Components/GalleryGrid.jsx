import InfiniteScroll from "react-infinite-scroll-component";

const GalleryGrid = ({ photos, getPhotos, error }) => {
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={getPhotos}
      hasMore={true}
      loader={photos.length > 0 && <h4>Loading...</h4>}
    >
      <div className="grid">
        {(photos.length === 0 || error) && <p>No data found</p>}
        {photos?.map((p) => (
          <div className="image">
            <img src={p?.urls?.thumb || ""} alt="random pic" loading="lazy" />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default GalleryGrid;
