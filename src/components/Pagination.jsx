import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    console.log(currentItems);
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    const divStyle1 = {
      fontFamily: "Barlow, sans-serif",
    };
    
    return (
      <>    
      <div className="grid w-full justify-between gap-y-8">
        {currentItems.map((item) => {
          return(
            <div>{item}</div>
          )
        })}
      </div>
      <div style={divStyle1}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          nextClassName="hidden"
          previousClassName="hidden"
          renderOnZeroPageCount={null}
          activeLinkClassName="bg-[#f3c351] rounded-md flex justify-center items-center w-full h-full text-black"
          pageClassName="w-[60px] h-[60px] flex justify-center items-center text-[#bbbdc7]"
          className="list-none flex font-extrabold border-2 rounded-md bg-white justify-center p-6  mx-6 mt-10 items-center mb-[10rem] text-xl gap-2"
        />
      </div>
    </>
  );
};

export default Pagination;
