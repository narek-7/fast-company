import React from 'react';
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	const pageCount = Math.ceil(itemsCount / pageSize);
	if (pageCount === 1) return null;
	const pages = _.range(1, pageCount + 1); // create array[1,2,3] for pages
	return (
		<nav>
			<ul className="pagination">
				{pages.map((page) => {
					return (
						<li className={"page-item" + (page === currentPage ? " active" : "")} key={"page_" + page}>
							<a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
						</li>);
				}
				)}
			</ul>
		</nav>);
};

export default Pagination;