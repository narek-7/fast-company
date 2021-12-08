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

	const renderPhrase = () => {
		return users.length ? `${users.length} человек тусанет с тобой сегодня` : "Никто с тобой не тусанет";
	};

	const getBageClasses = () => {
		return users.length ? "badge bg-primary" : "badge bg-danger";
	};

	return (
		<>
			<span id="message" className={getBageClasses()}>{renderPhrase()}</span>
			<table className="table">
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
							<tr>
								<td key={user.name}>{user.name}</td>
								<td key={user.qualities._id + user.name}>{handleQualities(user.qualities)}</td>
								<td key={user.profession._id}>{user.profession.name}</td>
								<td key={user._id + String(user.completedMeetings)}>{user.completedMeetings}</td>
								<td key={user._id + String(user.rate)}>{`${user.rate} / 5`}</td>
								<td key={user._id}>
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