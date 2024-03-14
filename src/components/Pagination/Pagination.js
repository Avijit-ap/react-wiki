import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ updatePageNumber, info, pageNumber }) => {
  return (
    <ReactPaginate
    style={{ textDecoration: 'none' }}
      className=" pagination justify-content-center gap-4 my-4"
      nextLabel={<span style={{ color: 'white', textDecoration: 'none' }}>Next</span>}
      forcePage={pageNumber===1?0:-1}
      pageCount={info?.pages}
      previousLabel={<span style={{ color: 'white', textDecoration: 'none' }}>Prev</span>}
      previousClassName="btn btn-primary "
      nextClassName="btn btn-primary"
      pageClassName	="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(e) => 
        updatePageNumber(e.selected +1)
      }
      hrefAllControls="false"

      />

  );
};

export default Pagination;
