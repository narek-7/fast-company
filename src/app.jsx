import React, { useState } from 'react';
import Users from './components/users';
import api from "./api/index";
import SearchStatus from "./components/searchStatus";

const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	return (
		<>
			<SearchStatus />
			<Users {...users} />
		</>
				)
	}

export default App;