import { useEffect, useState } from "react";

const useJoinTour = () => {
  const [jointours, setJoinTours] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;
  useEffect(() => {
    const url = `https://tour.tutul.xyz/tour-join?page=${page}&&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setJoinTours(result.toursJoin);
        const count = result.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return {
    jointours,
    pageCount,
    page,
    size,
    setJoinTours,
    setPage,
    setPageCount,
  };
};

export default useJoinTour;
