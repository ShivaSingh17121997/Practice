import React from 'react'

function CreateArrayOfSizen (n) {
    return new Array(n).fill(0)
}

export default function Pagination({ currentPage,totalPages, handlePageChange }) {
    console.log(totalPages, handlePageChange, currentPage)

    let Pages = CreateArrayOfSizen(totalPages).map((a,i)=>{
      return  <button style={{margin: "0.5rem", padding:"0.5rem", borderColor:currentPage===i+1 && "red", borderRadius:"5px" }} onClick={() => handlePageChange(i+1) } disabled={currentPage === i+1}  data-testid="page-btn"> {i+1} </button>;
    })


    

  return (
    <div>
        {Pages}
    </div>
  )
}
