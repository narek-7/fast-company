import React, { useState } from 'react';
import api from "../api/index";
import User from "./user";

const Users = (props) => {
	let newUsers = Object.values(props);

	console.log(newUsers);

	const hideUsersTable = () => {
		const usersTable = document.querySelector('#usersTable');
		usersTable.style.display = 'none';
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
						<th>     </th>
					</tr>
				</thead>

				<tbody>
					{newUsers.map(user => <User key={user._id} {...user} />)}
				</tbody>
			</table>
		</>
	);
};

export default Users;