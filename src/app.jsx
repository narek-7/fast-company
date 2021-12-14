import React, { useState } from 'react';
import Users from './components/users';
import api from "./api/index";
import SearchStatus from "./components/searchStatus";

const App = () => {
	const initialUsers = api.users.fetchAll();
	addStatusToUsers();
	let [users, setUsers] = useState(initialUsers);

	function addStatusToUsers() {
		for (const u in initialUsers) {
			let status = {};
			status.favorite = (Math.floor(Math.random() * 2));
			initialUsers[u] = { ...initialUsers[u], ...status };
		}
	}

	const handleStatusChange = (userId) => {
		let newUsers = users.map(user => {
			if (user._id === userId) {
				user.favorite = Number(!user.favorite);
				console.log(user.favorite);
			};
			return user;
		});
		setUsers(newUsers); //! question   why here I must use setUsers
	};

	function handleDelete(userId) {
		setUsers((prevState) => prevState.filter(user => user._id !== userId));
		hideUsersTable(users.length);
	}

	const hideUsersTable = (numberOfUsers) => {
		if (numberOfUsers === 1) {
			document.querySelector('#usersTable').style.display = 'none';
		}
	};

	return (
		<>
			<SearchStatus {...users} />
			<Users {...users} onDeleteUser={handleDelete} onUserStatusChange={handleStatusChange} />
		</>
	);
};

export default App;