import { number } from 'prop-types'
import React from 'react'

function Pagination({countresPerPage,totalCountries,paginete}) {
    const pageNumber=[]
    for(let i=1;i <= Math.ceil(totalCountries / countresPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumber.map(number =>(
                        <li className="page-item" key={number}>
                            <a href="!#" className="page-link" onClick={() => paginete(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination
