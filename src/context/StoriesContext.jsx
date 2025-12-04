import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
  const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    try {
      const res = await axios.get(
        "https://mxpertztestapi.onrender.com/api/sciencefiction"
      );
      setStories(res.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <StoriesContext.Provider value={{ stories }}>
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => useContext(StoriesContext);
