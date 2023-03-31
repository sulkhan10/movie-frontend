import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import logo from "../logo.png";
import PaginationMenu from "../components/PaginationMenu";

import MoonLoader from "react-spinners/MoonLoader";

let TopRated = () => {
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [dataMenusPerPage] = useState(6);


  let indexOfLastMenu = currentPage * dataMenusPerPage;
  let indexOfFirstMenu = indexOfLastMenu - dataMenusPerPage;
  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen bg-yellow-100 flex justify-center items-center">
          <MoonLoader color="green" size={150} data-testid="loader" />
        </div>
      ) : (
        <div>
          <h1>HALO</h1>
        </div>
      )}
    </div>
  );
};
export default TopRated;
