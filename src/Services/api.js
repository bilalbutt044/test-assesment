import axios from "axios";

const api = {
  getImages: async ({ query, page }) => {
    if (query !== "") return api.searchImages();

    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos?page=${page} `,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("get Photos error ");
    }
  },
  searchImages: async ({ query, searchPage }) => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&w=600&h=600&page=${searchPage}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("search error ", error);
    }
  },
};

export const { getImages, searchImages } = api;
