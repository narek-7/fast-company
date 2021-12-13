import React, { useState } from 'react';
import Users from './components/users';
import api from "./api/index";
import SearchStatus from "./components/searchStatus";

const App = () => {
	const initialUsers = api.users.fetchAll();
	addStatus();
	const [users, setUsers] = useState(initialUsers);
console.log(users);

	function addStatus() {
		for (const u in initialUsers) {
			let status = {};
			status.favorite = (Math.floor(Math.random() * 2));
			initialUsers[u] = { ...initialUsers[u], ...status };
		}
	}

	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter(user => user._id !== userId));
		hideUsersTable(users.length);
	};

	const hideUsersTable = (numberOfUsers) => {
		if (numberOfUsers === 1) {
			document.querySelector('#usersTable').style.display = 'none';
		}
	};

	return (
		<>
			<SearchStatus {...users} />
			<Users {...users} onDeleteUser={handleDelete} />
		</>
	);
};

export default App;