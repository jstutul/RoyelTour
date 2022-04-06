import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;
  useEffect(() => {
    const url = `https://tour.tutul.xyz/tours-join/${user.email}?&&page=${page}&&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setOrder(result.orders);
        const count = result.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page, user]);
  return {
    order,
    pageCount,
    page,
    size,
    setOrder,
    setPage,
    setPageCount,
  };
};

export default useOrder;
