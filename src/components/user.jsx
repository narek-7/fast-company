import React from 'react';

const User = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			
			<td>{props.profession.name}</td>
			<td>{props.completedMeetings}</td>
			<td>{`${props.rate} / 5`}</td>
				{/* <button type="button" className="btn btn-danger" onClick={() => handleDelete(props._id)}>
					delete
				</button> */}
			
		</tr>
	);
};

export default User;