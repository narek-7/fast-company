import React from 'react';
import Quality from "./quality";
import Bookmark from "./bookmark";
import PropTypes from 'prop-types';



const User = (props) => {

	return (
		<tr key={props._id}>
			<td>{props.name}</td>
			<td>{<Quality {...props} />}</td>
			<td>{props.profession.name}</td>
			<td>{props.completedMeetings}</td>
			<td>{`${props.rate} / 5`}</td>
			<td>
				{<span onClick={() => props.onStatusChange(props._id)}>
					<Bookmark {...props} />
				</span>}
			</td>
			<td>
				<button type="button" className="btn btn-danger" onClick={() => props.onDelete(props._id)}>
					delete
				</button>
			</td>
		</tr>
	);
};

User.propTypes = {
	props: PropTypes.object,
};


export default User;