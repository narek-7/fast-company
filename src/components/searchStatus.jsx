import React from 'react';

const SearchStatus = () => {
	const uuu = 5;

	const getBageClasses = () => {
		return uuu ? "badge bg-primary" : "badge bg-danger";
	};

	const renderPhrase = () => {
		if (uuu > 4 || uuu === 1) return `${uuu} человек тусанет с тобой сегодня`;
		if (uuu > 1) return `${uuu} человека тусанет с тобой сегодня`;
		if (uuu === 0) {
			// hideUsersTable();
			return "Никто с тобой не тусанет";
		};
	};

	return (
		<span id="message" className={getBageClasses()}>{renderPhrase()}</span>
	);
};

export default SearchStatus;