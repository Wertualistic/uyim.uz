import React from 'react'
import "../Uy.css"

function Pagination() {
  return (
    <div className='pagination_filter'>
    <div><nav aria-label="Page navigation example">
     <ul className="pagination">
       <li className="page-item"><a className="page-link" href="#">Barchasi</a></li>
       <li className="page-item"><a className="page-link" href="#">1</a></li>
       <li className="page-item"><a className="page-link" href="#">2</a></li>
       <li className="page-item"><a className="page-link" href="#">3</a></li>
       <li className="page-item"><a className="page-link" href="#">4</a></li>
       <li className="page-item"><a className="page-link" href="#">5</a></li>
       <li className="page-item"><a className="page-link" href="#">Keyingi</a></li>
     </ul>
   </nav></div>
   </div>
  )
}

export default Pagination