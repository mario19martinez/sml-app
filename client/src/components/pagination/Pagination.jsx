import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  pageStyle,
  setPageStyle,
  cardXPage,
  client,
  pages,
}) => {
  const [currentPage, setCurrentPage] = useState(pageStyle);
  const pageNumbers = [];

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil(client.length / cardXPage); i++) {
    pageNumbers.push(i);
  }

  return (
  pageNumbers.length > 1 &&
    (<>
      <div className={style.divPagination}>
        <ul className={style.lista}>
          {pageNumbers.map((num) => (
              <li
                className={`${style.items} ${
                  pageStyle === num ? style.currentPage : ""
                }`}
                key={num}
              >
                <a
                  onClick={() => {
                    pages(num);
                    // setCurrentPage(num)
                    setPageStyle(num);
                  }}
                >
                  {num}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>)
  );
};
// href="#idHome"
export default Pagination;
