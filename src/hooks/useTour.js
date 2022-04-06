import { useEffect, useState } from "react";

const useTour = () => {
  const [alltours, setTours] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;
  useEffect(() => {
    fetch(`https://tour.tutul.xyz/tours?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((result) => {
        setTours(result.tours);
        const count = result.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return {
    alltours,
    pageCount,
    page,
    size,
    setTours,
    setPage,
    setPageCount,
  };
};
export default useTour;
