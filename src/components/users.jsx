import React, { useState } from 'react';
import api from "../api/index";

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handleQualities = (qualities) => {
		return (
			<>
				{qualities.map((quality) => {
					return (
						<span className={`badge rounded-pill bg-${quality.color}`}>
							{quality.name}
						</span>
					);
				})}
			</>
		);
	};

	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter(user => user._id !== userId));
	};

	const hideUsersTable = () => {
		const usersTable = document.querySelector('#usersTable');
		usersTable.style.display = 'none';
	};

	const renderPhrase = () => {
		if (users.length > 4 || users.length === 1) return `${users.length} человек тусанет с тобой сегодня`;
		if (users.length > 1) return `${users.length} человека тусанет с тобой сегодня`;
		if (users.length === 0) {
			hideUsersTable();
			return "Никто с тобой не тусанет";
		};
	};

	const getBageClasses = () => {
		return users.length ? "badge bg-primary" : "badge bg-danger";
	};

	return (
		<>
			<span id="message" className={getBageClasses()}>{renderPhrase()}</span>
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
					{(users.map((user) => {
						return (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>{handleQualities(user.qualities)}</td>
								<td>{user.profession.name}</td>
								<td>{user.completedMeetings}</td>
								<td>{`${user.rate} / 5`}</td>
								<td>
									<button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)}>
										delete
									</button></td>
							</tr>);
					}
					))}
				</tbody>
			</table>
		</>
	);
};

export default Users;