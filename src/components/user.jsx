import React from 'react';

const User = (props) => {

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

	return (
		<tr>
			<td>{props.name}</td>
			<td>{handleQualities(props.qualities)}</td>
			<td>{props.profession.name}</td>
			<td>{props.completedMeetings}</td>
			<td>{`${props.rate} / 5`}</td>
			<td>
				<button type="button" className="btn btn-danger" onClick={() => props.onDelete(props._id)}>
					delete
				</button>
			</td>
		</tr>
	);
};

export default User;