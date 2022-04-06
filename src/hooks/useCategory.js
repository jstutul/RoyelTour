import { useEffect, useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://tour.tutul.xyz/categorylist")
      .then((res) => res.json())
      .then((result) => setCategory(result));
  }, []);
  return {
    category,
  };
};

export default useCategory;
