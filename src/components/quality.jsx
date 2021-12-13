import React from 'react';

const Quality = (props) => {

	return (
		<>
			{props.qualities.map((quality) => {
				return (
					<span className={`badge rounded-pill bg-${quality.color}`}>
						{quality.name}
					</span>
				);
			})}
		</>
	);
};

export default Quality;