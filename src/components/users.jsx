import React, { useState } from 'react';
import api from "../api/index";

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());
	const handleDelete = (userId) => {

	}

	const renderPhrase = (number) => {

	}

	return (
	<h1>Users</h1>
	);
};

export default Users;