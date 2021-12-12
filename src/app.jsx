import React, { useState } from 'react';
import Users from './components/users';
import api from "./api/index";

const App = () => {
	// const [users, setUsers] = useState(api.users.fetchAll());
	return <Users />;
};

export default App;