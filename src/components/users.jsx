import React, { useState } from 'react';
import Pagination from './pagination';
import User from "./user";

const Users = (props) => {

	let newUsers = Object.values(props).filter(user => typeof user !== "function");
	const count = newUsers.length;
	const pageSize = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex);
	};

	return (
		<>
			<table className="table" id="usersTable">
				<thead>
					<tr>
						<th>Имя</th>
						<th>Качества</th>
						<th>Профессия</th>
						<th>Встретился, раз</th>
						<th>Оценка</th>
						<th>Избранное</th>
						<th>     </th>
					</tr>
				</thead>
				<tbody>
					{newUsers.map(user =>
						<User
							key={user._id}
							{...user}
							onDelete={props.onDeleteUser}
							onStatusChange={props.onUserStatusChange}
						/>)}
				</tbody>
			</table>
			<Pagination
				itemsCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange} />
		</>
	);
};

export default Users;