import React from 'react';
import PropTypes from 'prop-types';

const Quality = (props) => {
	return (
		<>
			{props.qualities.map((quality) => {
				return (
					<span className={`badge rounded-pill bg-${quality.color}`} key={quality._id}>
						{quality.name}
					</span>
				);
			})}
		</>
	);
};

Quality.propTypes = {
	props: PropTypes.object,
};

export default Quality;