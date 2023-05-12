import * as React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { colors } from "@mui/material";
import style from "./Pagination.module.css";

export default function PaginationOutlined({
  pageStyle,
  setPageStyle,
  cardXPage,
  client,
  pages,
}) {
  const [currentPage, setCurrentPage] = useState(pageStyle);
  const pageNumbers = [];

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil(client.length / cardXPage); i++) {
    pageNumbers.push(i);
  }

  
  const handleChangePage = (e, p) => {
    console.log(p);
    setPageStyle(p);
    pages(p);
    color={white}
    setCurrentPage(p);
  };

  return (
    <div className={`${style.textPagination} flex items-center justify-center`}>
      <Stack spacing={2} className="bg-[#39394B] mt-3 p-1 flex rounded-xl">
        <Pagination 
          count={pageNumbers.length}
          color="primary"
          onChange={handleChangePage}
      
        />
      </Stack>
    </div>
  );
}

// const nextPageHandler = (arrow, num) => {
//   const cantidad = 2;

//   if (
//     arrow === "up" &&
//     pageStyle < pageNumbers.length &&
//     pageStyle + cantidad < pageNumbers.length + 1
//   ) {
//     setPageStyle(pageStyle + cantidad);
//     pages(pageStyle + cantidad);
//     setCurrentPage(pageStyle + cantidad);
//   } else {
//     if (arrow === "down" && pageStyle > 1 && pageStyle - cantidad > 0) {
//       setPageStyle(pageStyle - 2);
//       pages(pageStyle - 2);
//       setCurrentPage(pageStyle - 2);
//     }
//   }
// };
{/* {console.log(pageNumbers)}
<div className={style.divPagination}>
<button
className={style.itemsArrow}
onClick={() => {
  nextPageHandler("down");
}}
>
&lt;
</button>
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
            // pages(num);
            // setCurrentPage(num)
            // setPageStyle(num);

          }}
          >
          {num}
        </a>
      </li>
    ))}
  </ul>
  <button
    className={style.itemsArrow}
    onClick={() => {
      nextPageHandler("up");
    }}
  >
    &gt;
  </button>
</div> */}