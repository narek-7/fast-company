import React from 'react';

const SearchStatus = (props) => {

	const numberOfUsers = Object.keys(props).length;

	const getBageClasses = () => {
		return numberOfUsers ? "badge bg-primary" : "badge bg-danger";
	};

	const renderPhrase = () => {
		if (numberOfUsers > 4 || numberOfUsers === 1) return `${numberOfUsers} человек тусанет с тобой сегодня`;
		if (numberOfUsers > 1) return `${numberOfUsers} человека тусанет с тобой сегодня`;
		if (numberOfUsers === 0) {
			// hideUsersTable();
			return "Никто с тобой не тусанет";
		};
	};

	return (
		<span id="message" className={getBageClasses()}>{renderPhrase()}</span>
	);
};

export default SearchStatus;